import "./Hero.css";
import heroimg from '../../assets/hero-img.png';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-eyebrow">
          NEW COLLECTION — 2026
        </span>

        <h1>
          DESIGNED
          <span>FOR EVERYDAY.</span>
        </h1>

        <p>
          Modern essentials crafted for
          <br />
          your everyday life.
        </p>

        <Link to='/collections'>
          <button className="hero-button">  
             EXPLORE COLLECTION
             <span>↗</span>
          </button>
        </Link>

        <div className="hero-meta">
          <span>01</span>
          <span className="hero-line"></span>
          <span>03</span>
        </div>

      </div>

      <div className="hero-visual">

        <div className="hero-image-wrapper">

          <img
            src={heroimg}
            alt="Velora new collection"
          />

          <div className="hero-image-label">
            <span>VELORA</span>
            <span>ESSENTIALS</span>
          </div>

        </div>

        <span className="hero-side-text">
          EVERYDAY / ESSENTIALS
        </span>

      </div>

    </section>
  );
};

export default Hero;









