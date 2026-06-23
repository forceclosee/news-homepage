import Hero from "./Hero";
import NewSection from "./NewSection";

import "./NewsContent.css";

export default function NewsContent() {
  return (
    <div className="news-content">
      <Hero className="news-content__hero" />
      <NewSection className="news-content__new-section" />
    </div>
  );
}
