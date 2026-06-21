import HamburgerMenu from "./HamburgerMenu";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <a className="navbar__link" href="">
              Home
            </a>
          </li>
          <li className="navbar__list-item">
            <a className="navbar__link" href="">
              New
            </a>
          </li>
          <li className="navbar__list-item">
            <a className="navbar__link" href="">
              Popular
            </a>
          </li>
          <li className="navbar__list-item">
            <a className="navbar__link" href="">
              Trending
            </a>
          </li>
          <li className="navbar__list-item">
            <a className="navbar__link" href="">
              Categories
            </a>
          </li>
        </ul>
      </nav>
      <HamburgerMenu />
    </>
  );
}
