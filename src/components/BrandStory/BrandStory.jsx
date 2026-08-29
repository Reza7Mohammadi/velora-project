import { Link } from "react-router-dom";
import brandStoryImage from "../../assets/brandstory.png";

import "./BrandStory.css";

const BrandStory = () => {
  return (
    <section className="brand-story">

      <div className="brand-story-image">
        <img
          src={brandStoryImage}
          alt="Velora collection"
        />
      </div>

      <div className="brand-story-content">

        <span className="brand-story-label">
          OUR PHILOSOPHY
        </span>

        <h2>
          DESIGNED
          <br />
          WITH
          <br />
          INTENTION.
        </h2>

        <p>
          We believe everyday clothing should feel
          effortless, refined, and timeless.
        </p>

        <p>
          Velora creates modern essentials with a focus
          on thoughtful design, quality, and simplicity.
        </p>

        <Link
          to="/about"
          className="brand-story-link"
        >
          DISCOVER VELORA →
        </Link>

      </div>

    </section>
  );
};

export default BrandStory;

