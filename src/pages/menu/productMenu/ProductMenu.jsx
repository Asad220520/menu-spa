// import React from "react";
// import scss from "./ProductMenu.module.scss";
// import { getProduct } from "../../../api/product";

// const ProductMenu = () => {
//   const { data: productMenuData, isLoading, isError } = getProduct();

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Failed to load category</p>;

//   console.log(productMenuData);

//   return (
//     <section className={scss.ProductMenu}>
//       <div className="container">
//         <div className={scss.content}>
//           <div className={scss.productMenu_info}>
//             {productMenuData?.map((item) => (
//               <div key={item.id} className={scss.productMenuItem}>
//                 <h4>{item.category.category_name}</h4>
//                 <h1>{item.product_name}</h1>
//                 <image>{item.product_image}</image>
//                 <p>{item.price}</p>
//                 <p>{item.product_ingradient}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductMenu;

import React from "react";
import scss from "./ProductMenu.module.scss";
import { getProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";

const ProductMenu = () => {
  const { data: productMenuData, isLoading, isError } = getProduct();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load category</p>;

  console.log(productMenuData);

  // Если хочешь фильтровать — можно добавить условие,
  // пока показываю все продукты:
  const filteredProducts = productMenuData || [];

  return (
    <section className={scss.ProductMenu}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.productMenu}>
            {filteredProducts.length > 0 ? (
              <div className={scss.productGrid}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className={scss.productCard}>
                    <div className={scss.imageWrapper}>
                      <img
                        src={product.product_image}
                        alt={product.product_name}
                        className={scss.productImage}
                        onClick={() => navigate(`/menuDetaile/${product.id}`)}
                      />
                    </div>
                    <h4>{product.category?.category_name}</h4>
                    <h1>{product.product_name}</h1>
                    <p>{product.price}</p>
                    <p>{product.product_ingradient}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMenu;
