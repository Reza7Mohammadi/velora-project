import { Link } from "react-router-dom"; 
import about from'../../assets/products/about.png';
import "./About.css";


const About = () => {
  return (
    <main className="about-page">

      {/* ================================
          HERO
      ================================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span>ABOUT VELORA</span>

          <h1>
            LESS,
            <br />
            BUT BETTER.
          </h1>

          <p>
            Thoughtfully designed essentials
            made for everyday life.
          </p>

        </div>

      </section>


      {/* ================================
          BRAND STORY
      ================================= */}

      <section className="about-story">

        <div className="about-story-image">

          <img
            src={about}
            alt="Velora brand"
          />

        </div>


        <div className="about-story-content">

          <span>THE VELORA STORY</span>

          <h2>
            Designed for
            <br />
            everyday living.
          </h2>

          <p>
            Velora was created around a simple idea:
            getting dressed should feel effortless.
          </p>

          <p>
            We focus on timeless silhouettes,
            thoughtful details and pieces that
            naturally become part of your everyday
            wardrobe.
          </p>

          <p>
            Instead of chasing every trend, we believe
            in creating clothes that stay relevant,
            season after season.
          </p>

        </div>

      </section>


      {/* ================================
          PHILOSOPHY
      ================================= */}

      <section className="about-philosophy">

        <div className="about-philosophy-header">

          <span>OUR PHILOSOPHY</span>

          <h2>
            THE WAY WE
            <br />
            DESIGN.
          </h2>

        </div>


        <div className="about-values">

          <div className="about-value">

            <span>01</span>

            <h3>TIMELESS</h3>

            <p>
              We create pieces that feel relevant
              beyond a single season.
            </p>

          </div>


          <div className="about-value">

            <span>02</span>

            <h3>THOUGHTFUL</h3>

            <p>
              Every silhouette and detail has a
              purpose.
            </p>

          </div>


          <div className="about-value">

            <span>03</span>

            <h3>EVERYDAY</h3>

            <p>
              Designed to move naturally through
              your everyday life.
            </p>

          </div>

        </div>

      </section>


      {/* ================================
          CLOSING
      ================================= */}

      <section className="about-closing">

        <span>THE VELORA APPROACH</span>

        <h2>
          STYLE SHOULD
          <br />
          FEEL EFFORTLESS.
        </h2>

        <Link to="/collections">
          DISCOVER THE COLLECTIONS →
        </Link>

      </section>

    </main>
  );
};


export default About;