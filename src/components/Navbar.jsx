import { useContext } from "react";

import { MenuContext } from "../context/MenuContext";
import { navLink } from "../data/data";
import HamburgerMenu from "./HamburgerMenu";

import "./Navbar.css";

export default function Navbar() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const linkLists = navLink.map((link) => (
    <li className="navbar__list-item" key={link.id}>
      <a className="navbar__link" href="#">
        {link.content}
      </a>
    </li>
  ));

  return (
    <>
      <nav className="navbar" data-is-menu-open={isMenuOpen}>
        <ul className="navbar__list">{linkLists}</ul>
      </nav>
      <HamburgerMenu />
    </>
  );
}
