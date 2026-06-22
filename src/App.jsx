import Header from "./components/Header";
import NewsContent from "./components/NewsContent";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <NewsContent />
      </main>
      <Footer />
    </>
  );
}
