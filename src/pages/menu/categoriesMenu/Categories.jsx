'use client'
import React from "react";
import scss from "./Categories.module.scss";
import { getCategories } from "../../../api/categories";

const Categories = ({ onSelectCategory }) => {
  const { data: categoriesData, isLoading, isError } = getCategories();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load category</p>;
console.log(categoriesData);

  return (
    <section className={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.categoriesInfo}>
            {/* {categoriesData?.map((item) => (
              <div
                key={item.id}
                className={scss.categoriesItem}
                onClick={() => onSelectCategory(item.category_name)}
              >
                <h1>{item.category_name}</h1>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
