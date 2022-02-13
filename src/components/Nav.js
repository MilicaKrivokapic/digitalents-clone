import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className="header">
        <button
          className={`hamburger hamburger--collapse ${
            isOpen ? "is-active" : ""
          }`}
          type="button"
          onClick={handleOpen}
          aria-label="hamburger-nav"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
      <div
        className={`nav-area ${isOpen ? "nav-area-open" : ""}`}
        onClick={closeMenu}
      >
        <nav
          className={`header-nav ${isOpen ? "" : "nav-hidden"}`}
          onClick={handleOpen}
        >
          <h1>
            <Link className="headerlogo" to="/">
              Digitalents Helsinki
            </Link>
          </h1>
          <ul>
            <li>
              <a href="/#info">Tietoa meistä</a>
            </li>
            <li>
              <a href="/#tiimit">Tiimit</a>
            </li>
            <li>
              <a href="/#yhteistyo">Yhteistyö</a>
            </li>
            <li>
              <a href="/#hakijalle">Hakijalle</a>
            </li>
            <li>
              <Link to="/contact">Ota yhteyttä</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Nav;
