import { useContext } from "react";

import { MenuContext } from "./context/MenuContext";
import Header from "./components/Header";
import NewsContent from "./components/NewsContent";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  return (
    <>
      <Header />
      <main className="main" inert={isMenuOpen}>
        <NewsContent />
      </main>
      <Footer />
    </>
  );
}
