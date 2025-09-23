import React from "react";
import scss from "./CategoryMenu.module.scss";
import { getCategory } from "../../../api/category";

const CategoryMenu = ({ selectedCategory }) => {
  const { data: categoryMenuData, isLoading, isError } = getCategory();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load category</p>;

  const filteredData = selectedCategory
    ? categoryMenuData?.filter((item) => item.category_name === selectedCategory)
    : categoryMenuData;

    console.log(categoryMenuData);
    
  return (
    <section className={scss.CategoryMenu}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.categoryMenu_info}>

            
            {filteredData?.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className={scss.categoryMenuItem}>
                  <h1>{item.category_name}</h1>
                  <ul>
                    {item.menu_product?.length > 0 ? (
                      item.menu_product.map((product) => (
                        <li key={product.id}>
                          <h3>{product.product_name}</h3>
                          <p>{product.description}</p>
                          <p>{product.price} сом</p>
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
      </div>
    </section>
  );
};

export default CategoryMenu;
