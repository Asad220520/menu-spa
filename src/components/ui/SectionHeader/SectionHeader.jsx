import React from "react";
import s from "./SectionHeader.module.scss";

export default function SectionHeader({
  title,
  leftIcon,
  rightIcon,
  both = false,
}) {
  return (
    <div className={s.wrap}>
      {(leftIcon || both) && (
        <img src={leftIcon || rightIcon} alt="" className={s.icon} />
      )}
      <h2 className={s.title}>{title}</h2>

      {(rightIcon || both) && (
        <img
          src={rightIcon || leftIcon}
          alt=""
          className={`${s.icon} ${s.mirror}`}
        />
      )}
    </div>
  );
}
