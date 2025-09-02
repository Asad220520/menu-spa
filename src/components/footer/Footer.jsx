import React from "react";
import { NavLink } from "react-router-dom";
import { RiTelegram2Fill, RiInstagramFill } from "react-icons/ri";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.top}>
            <div className={s.logo}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                Restaurant
              </NavLink>
            </div>

            <nav className={s.nav}>
              <NavLink
                to="/interior"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                Interior
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                Menu
              </NavLink>
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                Contacts
              </NavLink>
            </nav>

            <div className={s.icons}>
              <a href="#" aria-label="Telegram">
                <RiTelegram2Fill />
              </a>
              <a href="#" aria-label="Instagram">
                <RiInstagramFill />
              </a>
            </div>
          </div>

          <hr className={s.rule} />

          <div className={s.bottom}>
            <h4>© 2023 Motion Study LLC</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
