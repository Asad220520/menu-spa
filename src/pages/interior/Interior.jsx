import React from "react";
import scss from "./Interior.module.scss";
import { getModern } from "../../api/modern";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";

const Interior = () => {
  const { data, isLoading, isError } = getModern();

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка при загрузке данных</p>;

  return (
    <section className={scss.Interior}>
      <div className="container">
        <div className={scss.content}>
          <SectionHeader title="Modern Interior" leftIcon={left} both />
          <div className={scss.scrollContainer}>
            {data?.map((item) =>
              item.interior_images.map((img) => (
                <img
                  key={img.id}
                  src={img.interior_image}
                  alt={`interior ${img.id}`}
                  className={scss.interiorImage}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;


// "use client";
// import React from "react";
// import scss from "./Interior.module.scss";
// import { getModern } from "../../api/modern";
// import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
// import left from "../../assets/icons/left.svg";

// const Interior = () => {
//   const { data, isLoading, isError } = getModern();

//   if (isLoading) return <p>Загрузка...</p>;
//   if (isError) return <p>Ошибка при загрузке данных</p>;

//   return (
//     <section className={scss.Interior}>
//       <div className="container">
//         <div className={scss.content}>
//           <SectionHeader title="Modern Interior" leftIcon={left} both />

//           <div className={scss.gridContainer}>
//             {data?.map((item) =>
//               item.interior_images.slice(0, 5).map((img, i) => (
//                 <div
//                   key={img.id}
//                   className={`${scss.gridItem} ${scss["div" + (i + 1)]}`}
//                 >
//                   <img src={img.interior_image} alt={`interior ${img.id}`} />
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Interior;


