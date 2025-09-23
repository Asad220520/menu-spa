import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import FancyButton from "../../components/ui/Buttons/FancyButton";
import left from "../../assets/icons/left.svg";
import locationIcon from "../../assets/icons/location.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import s from "./HeaderBottom.module.scss";

const HeaderBottom = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://13.60.41.77/ru/list/')
      .then((res) => setData(res.data[0]))
      .catch((err) => console.error("Ошибка API:", err));
  }, []);

  if (!data) return null;

  return (
    <section
      className={s.headerBottom}
      style={{ backgroundImage: `url(${data.list_image})` }}
    >
      <div className={s.overlay} />

      <div className={s.content}>
        <SectionHeader
          title={data.headline || "Delicious"}
          leftIcon={left}
          both
          className={s.sectionHeader}
        />

        <h1 className={s.mainTitle}>{data.title}</h1>

        <p className={s.description}>{data.description}</p>

        <div className={s.buttonContainer}>
          <FancyButton label="RESERVE YOUR TABLE" className={s.reserveButton} />
        </div>
      </div>

      <div className={s.bottomInfo}>
        <div className={s.infoBlock}>
          <div className={s.infoIcon}>
            <img src={locationIcon} alt="Location" />
          </div>
          <div className={s.infoText}>
            <div className={s.infoTitle}>
              {data.title_location || "Location"}
            </div>
            <div className={s.infoContent}>{data.address}</div>
          </div>
        </div>

        <div className={s.infoBlock}>
          <div className={s.infoIcon}>
            <img src={phoneIcon} alt="Phone" />
          </div>
          <div className={s.infoText}>
            <div className={s.infoTitle}>{data.title_hotline || "Hotline"}</div>
            <div className={s.infoContent}>{data.phone_number}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBottom;
