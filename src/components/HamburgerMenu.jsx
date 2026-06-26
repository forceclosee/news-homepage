import { useContext } from "react";

import { MenuContext } from "../context/MenuContext";

import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hamburger-menu"
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}>
      <div className="hamburger-menu__icon" aria-hidden="true"></div>
      <div className="hamburger-menu__icon" aria-hidden="true"></div>
      <div className="hamburger-menu__icon" aria-hidden="true"></div>
    </button>
  );
}
