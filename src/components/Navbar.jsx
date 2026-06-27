import { useContext, useEffect, useRef } from "react";

import { navLink } from "../data/data";
import HamburgerMenu from "./HamburgerMenu";
import { MenuContext } from "../context/MenuContext";

import "./Navbar.css";

export default function Navbar() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const navbarRef = useRef(null);

  // outside click to close menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // add event listener to document
    document.addEventListener("mousedown", handleOutsideClick);

    // remove event listener when menu is closed
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const linkLists = navLink.map((link) => (
    <li className="navbar__list-item" key={link.id}>
      <a className="navbar__link" href="#">
        {link.content}
      </a>
    </li>
  ));

  return (
    <div ref={navbarRef} className="navbar-wrapper">
      <nav className="navbar" data-is-menu-open={isMenuOpen}>
        <ul className="navbar__list">{linkLists}</ul>
      </nav>
      <HamburgerMenu />
    </div>
  );
}
