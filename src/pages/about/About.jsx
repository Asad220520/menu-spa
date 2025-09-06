import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";
import s from "./About.module.scss";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [sellerData, setSellerData] = useState(null);

  const [currentSellerImage, setCurrentSellerImage] = useState(0);

  useEffect(() => {
    axios
      .get("http://16.171.197.158/en/about/")
      .then((res) => setAboutData(res.data[0]))
      .catch((err) => console.error("Ошибка загрузки About API:", err));

    axios
      .get("http://16.171.197.158/en/seller/")
      .then((res) => setSellerData(res.data[0]))
      .catch((err) => console.error("Ошибка загрузки Seller API:", err));
  }, []);

  const handleNextSellerImage = () => {
    if (sellerData?.seller_images) {
      setCurrentSellerImage(
        (prev) => (prev + 1) % sellerData.seller_images.length
      );
    }
  };

  if (!aboutData || !sellerData) {
    return (
      <section className={s.loading}>
        <div className={s.loadingText}>Загрузка...</div>
      </section>
    );
  }

  return (
    <section className={s.about}>
      {/* Секция "О нас" */}
      <div className={s.aboutSection}>
        <div className={s.content}>
          <div className={s.textBlock}>
            <SectionHeader
              title={aboutData.headline}
              leftIcon={left}
              className={s.sectionHeader}
            />
            <h2 className={s.title}>{aboutData.title}</h2>
          </div>

          <div className={s.descriptionBlock}>
            <p className={s.description}>{aboutData.description}</p>
          </div>
        </div>

        <div className={s.imageGrid}>
          <div className={`${s.imageContainer} ${s.imageLeft}`}>
            <img
              src={aboutData.restaurant_images[0].restaurant_image}
              alt="Restaurant Left"
            />
          </div>

          <div className={`${s.imageContainer} ${s.imageRight}`}>
            <img
              src={aboutData.restaurant_images[1].restaurant_image}
              alt="Restaurant Right"
            />
          </div>
        </div>
      </div>

      {/* Секция "Бестселлеры" */}
      <div className={s.sellerSection}>
        <div className={s.textContent}>
          <SectionHeader
            title={sellerData.headline}
            leftIcon={left}
            className={s.sectionHeader}
          />

          <h2 className={s.title}>{sellerData.title}</h2>
          <p className={s.description}>{sellerData.description}</p>
        </div>

        <div className={s.sellerImages}>
          <div className={s.imageSlider}>
            {sellerData.seller_images.map((image, index) => (
              <div
                key={image.id}
                className={`${s.sellerImageContainer} ${
                  index === currentSellerImage ? s.active : ""
                } ${
                  index ===
                  (currentSellerImage + 1) % sellerData.seller_images.length
                    ? s.next
                    : ""
                }`}
              >
                <img
                  src={image.seller_image}
                  alt={`Seller ${index + 1}`}
                  className={s.sellerImage}
                />
              </div>
            ))}
          </div>

          <button
            className={s.nextButton}
            onClick={handleNextSellerImage}
            aria-label="Следующее изображение"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default About;
