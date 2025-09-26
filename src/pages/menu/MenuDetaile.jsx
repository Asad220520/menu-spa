// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import styles from "./MenuDetaile.module.scss"

// const MenuDetaile = () => {
//   const [categories, setCategories] = useState([])
//   const [products, setProducts] = useState([])
//   const [activeCategory, setActiveCategory] = useState(null)

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://13.60.41.77/ru/categories/")
//         setCategories(response.data)

//         if (response.data.length > 0) {
//           setActiveCategory(response.data[0].id)
//         }
//       } catch (error) {
//         console.error("Категорияларды жүктөөдө ката чыкты:", error)
//       }
//     }
//     fetchCategories()
//   }, [])

//   useEffect(() => {
//     if (activeCategory) {
//       axios
//         .get(`http://13.60.41.77/ru/product/?category=${activeCategory}`)
//         .then((response) => {
//           setProducts(response.data)
//         })
//         .catch((error) =>
//           console.error("Продуктыларды жүктөөдө ката чыкты:", error)
//         )
//     }
//   }, [activeCategory])

//   return (
//     <div className={styles.container}>

//       <div className={styles.menuList}>
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
//       </div>

//     <div className={styles.menuContainer}>

//       {products[1] && (
//         <div className={styles.productBlocking}>
//           <div className={styles.productCard}>
//             <img
//               src={products[1].product_image}
//               alt={products[1].product_name}
//               className={styles.product_image}
//             />
//             <h3>{products[1].product_name}</h3>
//             <p>{products[1].price} $</p>

//             {products[1].product_ingradient?.length > 0 && (
//               <p>
//                 {" "}
//                 {products[1].product_ingradient
//                   .map((ing) => ing.ingradient_name)
//                   .join(", ")}
//               </p>
//             )}

//             {products[1].product_extras?.length > 0 && (
//               <div>
//                 <b>Extras:</b>
//                 <ul>
//                   {products[1].product_extras.map((ex) => (
//                     <li key={ex.id}>
//                       {ex.extras_name} - {ex.price} $
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {products[1].product_drinks?.length > 0 && (
//               <div>
//                 <b>Drinks:</b>
//                 <ul>
//                   {products[1].product_drinks.map((dr) => (
//                     <li key={dr.id}>
//                       {dr.drink_name} - {dr.price} $
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//        <h2 className={styles.sectionTitle}>Похожие блюда</h2>

//       {products[0] && (
//         <div className={styles.productBlocks}>
//           <div className={styles.productCard}>
//             <img
//               src={products[0].product_image}
//               alt={products[0].product_name}
//               className={styles.product_image}
//             />
//             <h3>{products[0].product_name}</h3>
//             <p className={styles.product_price}>{products[0].price} $</p>

//             {products[0].product_ingradient?.length > 0 && (
//               <p className={styles.product_ingradient}>
//                 {products[0].product_ingradient
//                   .map((ing) => ing.ingradient_name)
//                   .join(", ")}
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>

//     </div>
//   )
// }

// export default MenuDetaile

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MenuDetaile.module.scss";
import { useParams, useLocation } from "react-router-dom";

const MenuDetaile = () => {
  const { id } = useParams(); // если передаём через URL
  const location = useLocation();
  const productId = location.state?.id || id;

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://13.60.41.77/ru/product/${productId}/`
        );
        setProduct(response.data);

        // подгружаем похожие продукты (по категории)
        if (response.data.category) {
          const related = await axios.get(
            `http://13.60.41.77/ru/product/?category=${response.data.category}`
          );
          setRelatedProducts(
            related.data.filter((p) => p.id !== response.data.id).slice(0, 5)
          );
        }
      } catch (error) {
        console.error("Ошибка при загрузке продукта:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      {/* <div className={styles.menuList}>
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${styles.menuItem} ${
              activeCategory === cat.id ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className={styles.span}>{cat.category_name}</span>
          </div>
        ))}
        <div className={styles.menuList_hyphen}></div>
      </div> */}
      <div className={styles.productBlocking}>
        <div className={styles.productCard}>
          <img 
            src={product.product_image}
            alt={product.product_name}
            className={styles.product_image}
          /> 
          <h3>{product.product_name}</h3>
          <p>{product.price} $</p>

          {product.product_ingradient?.length > 0 && (
            <p>
              {product.product_ingradient
                .map((i) => i.ingradient_name)
                .join(", ")}
            </p>
          )}

          {product.product_extras?.length > 0 && (
            <div>
              <b>Extras:</b>
              <ul>
                {product.product_extras.map((ex) => (
                  <li key={ex.id}>
                    {ex.extras_name} - {ex.price} $
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.product_drinks?.length > 0 && (
            <div>
              <b>Drinks:</b>
              <ul>
                {product.product_drinks.map((dr) => (
                  <li key={dr.id}>
                    {dr.drink_name} - {dr.price} $
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Похожие блюда</h2>
      <div className={styles.productBlocks}>
        {relatedProducts.map((p) => (
          <div key={p.id} className={styles.productCard}>
            <img
              src={p.product_image}
              alt={p.product_name}
              className={styles.product_image}
            />
            <h3>{p.product_name}</h3>
            <p>{p.price} $</p>
            {p.product_ingradient?.length > 0 && (
              <p>
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
