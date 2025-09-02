import { NavLink } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import s from "./FancyButton.module.scss";

export default function FancyButton({ label = "VIEW FULL MENU", onClick, to }) {
  return (
    <div className={s.wrapper}>
      <span className={`${s.line} ${s.top}`}></span>

      {to ? (
        <NavLink to={to} className={s.button}>
          <span>{label}</span>
          <LuArrowRight size={20} />
        </NavLink>
      ) : (
        <button className={s.button} onClick={onClick}>
          <span>{label}</span>
          <LuArrowRight size={20} />
        </button>
      )}

      <span className={`${s.line} ${s.bottom}`}></span>
    </div>
  );
}
