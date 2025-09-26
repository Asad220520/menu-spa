// "use client";
// import React, { useState } from "react";
// import scss from "./FullMenu.module.scss";
// import { getCategory } from "../../../api/category";
// import { getProduct } from "../../../api/product";
// import MenuDetaile from "../MenuDetaile";
// import { useNavigate } from "react-router-dom";

// const FullMenu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const { data: productsData, isLoading, isError } = getProduct();
//   const { data: categoriesData } = getCategory();

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Failed to load data</p>;
//   const navigate = useNavigate();
//   // Сортируем продукты по имени
//   const sortedProducts = productsData
//     ?.slice()
//     .sort((a, b) => (a.product_name || "").localeCompare(b.product_name || ""));

//   // Фильтруем по выбранной категории
//   let filteredProducts = selectedCategory
//     ? sortedProducts.filter((p) => p.category_name === selectedCategory)
//     : sortedProducts;

//   // Если категория не выбрана — показываем только первые 6 продуктов
//   if (!selectedCategory) {
//     filteredProducts = filteredProducts?.slice(0, 6);
//   }

//   return (
//     <section className={scss.FullMenu}>
//       <div className="container">
//         <div className={scss.content}>
//           <div className={scss.fullMenuInfo}>
//             <div className={scss.categories}>
//               {categoriesData?.map((cat) => (
//                 <div
//                   key={cat.id}
//                   className={`${scss.categoryItem} ${
//                     selectedCategory === cat.category_name ? scss.active : ""
//                   }`}
//                   onClick={() =>
//                     setSelectedCategory(
//                       selectedCategory === cat.category_name
//                         ? null
//                         : cat.category_name
//                     )
//                   }
//                 >
//                   <h1>{cat.category_name}</h1>
//                 </div>
//               ))}
//             </div>
//             <div className={scss.productMenu}>
//               {filteredProducts?.length > 0 ? (
//                 <div className={scss.productGrid}>
//                   {filteredProducts.map((product) => (
//                     <div key={product.id} className={scss.productCard}>
//                       <div className={scss.imageWrapper}>
//                         <img
//                           src={product.product_image}
//                           alt={product.product_name}
//                           className={scss.productImage}
//                           onClick={() => {
//                             console.log("Navigate clicked");
//                             navigate(`/menudetail`);
//                           }}
//                         />
//                       </div>
//                       <div className={scss.productInfo}>
//                         <h2 className={scss.productName}>
//                           {product.product_name}
//                         </h2>
//                         <p className={scss.productIngredients}>
//                           {product.product_ingradient
//                             ?.map((ing) => ing.ingradient_name)
//                             .join(", ")}
//                         </p>
//                         <div className={scss.productFooter}>
//                           <span className={scss.price}>
//                             {product.price} сом
//                           </span>
//                           <button className={scss.orderBtn}>Order Now</button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p>No products available</p>
//               )}
//             </div>
//           </div>
//           {/* <MenuDetaile /> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FullMenu;

"use client";
import React, { useState } from "react";
import scss from "./FullMenu.module.scss";
import { getCategory } from "../../../api/category";
import { getProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";

const FullMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const { data: productsData, isLoading, isError } = getProduct();
  const { data: categoriesData } = getCategory();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load data</p>;

  // Сортируем продукты по имени
  const sortedProducts = productsData
    ?.slice()
    .sort((a, b) => (a.product_name || "").localeCompare(b.product_name || ""));

  // Фильтруем по выбранной категории
  let filteredProducts = selectedCategory
    ? sortedProducts.filter((p) => p.category_name === selectedCategory)
    : sortedProducts;

  // Если категория не выбрана — показываем только первые 6 продуктов
  if (!selectedCategory) {
    filteredProducts = filteredProducts?.slice(0, 6);
  }

  const handleNavigate = (productId) => {
    // Навигация с передачей id продукта через state
    navigate(`/menudetail/${productId}`, { state: { id: productId } });
  };

  return (
    <section className={scss.FullMenu}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.fullMenuInfo}>
            <div className={scss.categories}>
              {categoriesData?.map((cat) => (
                <div
                  key={cat.id}
                  className={`${scss.categoryItem} ${
                    selectedCategory === cat.category_name ? scss.active : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === cat.category_name
                        ? null
                        : cat.category_name
                    )
                  }
                >
                  <h1>{cat.category_name}</h1>
                </div>
              ))}
            </div>

            <div className={scss.productMenu}>
              {filteredProducts?.length > 0 ? (
                <div className={scss.productGrid}>
                  {filteredProducts.map((product) => (
                    <div key={product.id} className={scss.productCard}>
                      <div className={scss.imageWrapper}>
                        <img
                          src={product.product_image}
                          alt={product.product_name}
                          className={scss.productImage}
                          onClick={() =>
                            navigate(`/menudetail/${product.id}`, {
                              state: { id: product.id },
                            })
                          }
                        />
                      </div>
                      <div className={scss.productInfo}>
                        <h2 className={scss.productName}>
                          {product.product_name}
                        </h2>
                        <p className={scss.productIngredients}>
                          {product.product_ingradient
                            ?.map((ing) => ing.ingradient_name)
                            .join(", ")}
                        </p>
                        <div className={scss.productFooter}>
                          <span className={scss.price}>
                            {product.price} сом
                          </span>
                          <button className={scss.orderBtn}>Order Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullMenu;
