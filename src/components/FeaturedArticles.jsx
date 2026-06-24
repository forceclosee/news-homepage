import { articleCarddata } from "../data/data";

import "./FeaturedArticles.css";

export default function FeaturedArticles({ className = "" }) {
  const articleCardLists = articleCarddata.map((card) => (
    <article className="article-card" key={card.id}>
      <img
        className="article-card__image"
        src={card.image}
        alt={card.title}
        width={200}
        height={254}
      />
      <div className="article-card__detail-wrapper">
        <p className="article-card__ranking">{card.ranking}</p>
        <h2 className="article-card__title">
          <a className="article-card__title-link" href="#">
            {card.title}
          </a>
        </h2>
        <p className="article-card__content">{card.content}</p>
      </div>
    </article>
  ));

  return (
    <div className={[className, "featured-articles"].filter(Boolean).join(" ")}>
      {articleCardLists}
    </div>
  );
}
