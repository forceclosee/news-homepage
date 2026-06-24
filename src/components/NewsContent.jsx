import Hero from "./Hero";
import NewSection from "./NewSection";
import FeaturedArticles from "./FeaturedArticles";

import "./NewsContent.css";

export default function NewsContent() {
  return (
    <div className="news-content">
      <Hero className="news-content__hero" />
      <NewSection className="news-content__new-section" />
      <FeaturedArticles className="news-content__featured-articles" />
    </div>
  );
}
