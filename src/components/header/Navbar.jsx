import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { LuUtensilsCrossed, LuMenu, LuX } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import "./Navbar.scss";

const nav = [
  { to: "/interior", label: "Interior" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/contacts", label: "Contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <Link to="/">Restaurant</Link>
          </div>

          <nav className="header--nav">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {n.label}
              </NavLink>
            ))}

            <div className="header--nav__search">
              <input type="text" placeholder="Search" />
              <span className="header--nav__search--icon">
                <CiSearch />
              </span>
            </div>

            <select defaultValue="en">
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="ky">KY</option>
            </select>
          </nav>

          <button
            className="header--menuBtn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <LuMenu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="drawer" onClick={() => setOpen(false)}>
          <div className="drawer__panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer__row">
              <span style={{ fontWeight: 600 }}>Navigation</span>
              <button
                className="drawer__close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <LuX size={22} />
              </button>
            </div>
            <div className="drawer__list">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {n.label}
                </NavLink>
              ))}

              <div className="header--nav__search" style={{ marginTop: 12 }}>
                <input type="text" placeholder="Search" />
                <span className="header--nav__search--icon">
                  <CiSearch />
                </span>
              </div>

              <select defaultValue="en" style={{ marginTop: 12 }}>
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="ky">KY</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
