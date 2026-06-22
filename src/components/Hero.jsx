import heroImageMobile from "../assets/image/image-web-3-mobile.jpg";
import heroImageDesktop from "../assets/image/image-web-3-desktop.jpg";

import "./Hero.css";

export default function Hero({ className = "" }) {
  return (
    <div className={[className, "hero"].filter(Boolean).join(" ")}>
      <picture>
        <source media="(width >= 48rem)" srcSet={heroImageDesktop} />
        <img className="hero__image" src={heroImageMobile} alt="" />
      </picture>
      <div className="hero__details">
        <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
        <p className="hero__description">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button type="button" className="button">
          Read more
        </button>
      </div>
    </div>
  );
}
