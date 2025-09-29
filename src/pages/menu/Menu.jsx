"use client";
import React, { useState } from "react";
import scss from "./Menu.module.scss";
import { getCategories } from "../../api/categories";
import { getCategory } from "../../api/category";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";
import FancyButton from "../../components/ui/Buttons/FancyButton";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data: menuData, isLoading, isError } = getCategories();

  const { data: categoryData } = getCategory();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load categories</p>;

  // сортируем категории
  const sortedMenuData = menuData
    ?.slice()
    .sort((a, b) => a.category_name.localeCompare(b.category_name));

  // если выбрана категория → показываем только её
  const filteredData = selectedCategory
    ? sortedMenuData?.filter((item) => item.category_name === selectedCategory)
    : sortedMenuData;

  // сортируем продукты в категории
  const sortedFilteredData = filteredData?.map((category) => {
    let products = category.menu_product
      ? [...category.menu_product].sort((a, b) =>
          a.product_name.localeCompare(b.product_name)
        )
      : [];

    // ограничение: только первые 5 продуктов, если категория не выбрана
    if (!selectedCategory) {
      products = products.slice(0, 5);
    }

    return { ...category, menu_product: products };
  });

  return (
    <section className={scss.Menu}>
      <div className="container">
        <div className={scss.content}>
          <SectionHeader title="Main Menu" leftIcon={left} both />
          {/* {sortedMenuData.map((item) => (
            <h1>{item.title}</h1>
          ))} */}
          <div className={scss.menuInfo}>
            {/* Левая колонка (категории) */}
            <div className={scss.categories}>
              {sortedMenuData?.map((item) => (
                <div
                  key={item.id}
                  className={`${scss.categoryItem} ${
                    selectedCategory === item.category_name ? scss.active : ""
                  }`}
                  onClick={() => {
                    const newCategory =
                      selectedCategory === item.category_name
                        ? null
                        : item.category_name;
                    setSelectedCategory(newCategory);
                    console.log("Выбрана категория:", newCategory);
                  }}
                >
                  <h1>{item.category_name}</h1>
                </div>
              ))}
            </div>

            {/* Правая колонка (продукты) */}
            <div className={scss.categoryMenu}>
              {sortedFilteredData?.length > 0 ? (
                sortedFilteredData.map((item) => (
                  <div key={item.id} className={scss.categoryMenuItem}>
                    <h1>{item.category_name}</h1>
                    <ul>
                      {item.menu_product?.length > 0 ? (
                        item.menu_product.slice(0, 5).map((product) => (
                          <li key={product.id} className={scss.productLine}>
                            <div className={scss.title}>
                              <span className={scss.productName}>
                                {product.product_name}
                              </span>
                              <span className={scss.leader}></span>
                              <span className={scss.price}>
                                {product.price} сом
                              </span>
                            </div>
                            <p className={scss.description}>
                              {product.description}
                            </p>
                            <button className={scss.orderBtn}>Order Now</button>
                          </li>
                        ))
                      ) : (
                        <p>No products available</p>
                      )}
                    </ul>
                  </div>
                ))
              ) : (
                <p>No category selected or no products</p>
              )}
            </div>
          </div>

          <FancyButton label="View Full Menu" to="/menu/full" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
