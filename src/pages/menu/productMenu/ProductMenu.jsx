import React from "react";
import scss from "./ProductMenu.module.scss";
import { getProduct } from "../../../api/product";

const ProductMenu = () => {
  const { data: productMenuData, isLoading, isError } = getProduct();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load category</p>;

  console.log(productMenuData);

  return (
    <section className={scss.ProductMenu}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.productMenu_info}>
            {productMenuData?.map((item) => (
              <div key={item.id} className={scss.productMenuItem}>
                <h4>{item.category.category_name}</h4>
                <h1>{item.product_name}</h1>
                <image>{item.product_image}</image>
                <p>{item.price}</p>
                <p>{item.product_ingradient}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMenu;
