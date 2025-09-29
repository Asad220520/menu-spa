// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./MenuDetaile.module.scss";
// import { useParams, useLocation } from "react-router-dom";

// const MenuDetaile = () => {
//   const { id } = useParams(); // если передаём через URL
//   const location = useLocation();
//   const productId = location.state?.id || id;

//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     if (!productId) return;

//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://13.60.41.77/ru/product/${productId}/`
//         );
//         setProduct(response.data);

//         // подгружаем похожие продукты (по категории)
//         if (response.data.category) {
//           const related = await axios.get(
//             `http://13.60.41.77/ru/product/?category=${response.data.category}`
//           );
//           setRelatedProducts(
//             related.data.filter((p) => p.id !== response.data.id).slice(0, 5)
//           );
//         }
//       } catch (error) {
//         console.error("Ошибка при загрузке продукта:", error);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className={styles.container}>
//       {/* <div className={styles.menuList}>
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className={`${styles.menuItem} ${
//               activeCategory === cat.id ? styles.active : ""
//             }`}
//             onClick={() => setActiveCategory(cat.id)}
//           >
//             <span className={styles.span}>{cat.category_name}</span>
//           </div>
//         ))}
//         <div className={styles.menuList_hyphen}></div>
//       </div> */}
//       <div className={styles.productBlocking}>
//         <div className={styles.productCard}>
//           <img
//             src={product.product_image}
//             alt={product.product_name}
//             className={styles.product_image}
//           />
//           <h3>{product.product_name}</h3>
//           <p>{product.price} $</p>

//           {product.product_ingradient?.length > 0 && (
//             <p>
//               {product.product_ingradient
//                 .map((i) => i.ingradient_name)
//                 .join(", ")}
//             </p>
//           )}

//           {product.product_extras?.length > 0 && (
//             <div>
//               <b>Extras:</b>
//               <ul>
//                 {product.product_extras.map((ex) => (
//                   <li key={ex.id}>
//                     {ex.extras_name} - {ex.price} $
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {product.product_drinks?.length > 0 && (
//             <div>
//               <b>Drinks:</b>
//               <ul>
//                 {product.product_drinks.map((dr) => (
//                   <li key={dr.id}>
//                     {dr.drink_name} - {dr.price} $
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       <h2 className={styles.sectionTitle}>Похожие блюда</h2>
//       <div className={styles.productBlocks}>
//         {relatedProducts.map((p) => (
//           <div key={p.id} className={styles.productCard}>
//             <img
//               src={p.product_image}
//               alt={p.product_name}
//               className={styles.product_image}
//             />
//             <h3>{p.product_name}</h3>
//             <p>{p.price} $</p>
//             {p.product_ingradient?.length > 0 && (
//               <p>
//                 {p.product_ingradient.map((i) => i.ingradient_name).join(", ")}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuDetaile;

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MenuDetaile.module.scss";
import { useParams, useLocation } from "react-router-dom";

const MenuDetaile = () => {
  const { id } = useParams();
  const location = useLocation();
  const productId = location.state?.id || id;

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Категорияларды алуу
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://13.60.41.77/ru/category/");
        setCategories(res.data);
      } catch (err) {
        console.error("Категорияларды алуу ката чыкты:", err);
      }
    };
    fetchCategories();
  }, []);

  // Продукттун деталдары жана окшош продуктылар
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://13.60.41.77/ru/product/${productId}/`
        );
        setProduct(res.data);

        if (res.data.category) {
          const related = await axios.get(
            `http://13.60.41.77/ru/product/?category=${res.data.category}`
          );
          setRelatedProducts(
            related.data.filter((p) => p.id !== res.data.id).slice(0, 5)
          );
        }
      } catch (err) {
        console.error("Продукт деталдары ката чыкты:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      {/* Сол жактагы категориялар */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${styles.categoryItem} ${
              activeCategory === cat.id ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.category_name}
          </div>
        ))}
      </div>

      {/* Продукт деталдары */}
      <div className={styles.menuContainer}>
        <div className={styles.productBlocking}>
          <img
            src={product.product_image}
            alt={product.product_name}
            className={styles.product_image}
          />
          <div className={styles.productRow}>
            <h3 className={styles.product_name}>{product.product_name}</h3>

            <p className={styles.product_price}>{product.price}$</p>
          </div>
          {product.product_ingradient?.length > 0 && (
            <p className={styles.product_ingradient}>
              {product.product_ingradient
                .map((i) => i.ingradient_name)
                .join(", ")}
            </p>
          )}
        </div>

        <div className={styles.list_ex_dr}>
          {/* Extras */}
          {product.product_extras?.length > 0 && (
            <div className={styles.extras}>
              <b className={styles.title}>Extras:</b>
              <ul className={styles.list}>
                {product.product_extras.map((ex) => (
                  <li key={ex.id} className={styles.item}>
                    <span>{ex.extras_name}</span>
                    <span>{ex.price} $</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Drinks */}
          {product.product_drinks?.length > 0 && (
            <div className={styles.drinks}>
              <b className={styles.title}>Drinks:</b>
              <ul className={styles.list}>
                {product.product_drinks.map((dr) => (
                  <li key={dr.id} className={styles.item}>
                    <span>{dr.drink_name}</span>
                    <span>{dr.price} $</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={styles.productBlocks}>
        {relatedProducts.map((p) => (
          <div key={p.id} className={styles.productCard}>
            <img
              src={p.product_image}
              alt={p.product_name}
              className={styles.product_image}
            />
            <h3>{p.product_name}</h3>
            <p className={styles.product_price}>{p.price} $</p>
            {p.product_ingradient?.length > 0 && (
              <p className={styles.product_ingradient}>
                {p.product_ingradient.map((i) => i.ingradient_name).join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDetaile;
