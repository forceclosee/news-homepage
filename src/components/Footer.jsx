import { useContext } from "react";

import { MenuContext } from "../context/MenuContext";

import "./Footer.css";

export default function Footer() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  return (
    <footer className="footer" inert={isMenuOpen}>
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="blank"
          rel="noopener noreferrer">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/forceclosee"
          target="blank"
          rel="noopener noreferrer">
          Force Close
        </a>
        .
      </p>
    </footer>
  );
}
