import HamburgerMenu from "./HamburgerMenu";

import { navLink } from "../data/data";

import "./Navbar.css";

export default function Navbar() {
  const listLinks = navLink.map((link) => (
    <li className="navbar__list-item" key={link.id}>
      <a className="navbar__link" href="">
        {link.content}
      </a>
    </li>
  ));

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">{listLinks}</ul>
      </nav>
      <HamburgerMenu />
    </>
  );
}
