import { newCardData } from "../data/data";

import "./NewSection.css";

export default function NewSection({ className = "" }) {
  const newCardLists = newCardData.map((card) => (
    <article className="new-card" key={card.id}>
      <h3 className="new-card__title">
        <a className="new-card__title-link" href="#">
          {card.title}
        </a>
      </h3>

      <p className="new-card__content">{card.content}</p>
    </article>
  ));

  return (
    <section className={[className, "new-section"].filter(Boolean).join(" ")}>
      <h2 className="new-section__title">New</h2>
      {newCardLists}
    </section>
  );
}
