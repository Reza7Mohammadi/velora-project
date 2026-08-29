import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            VELORA
          </Link>

          <p>
            Modern essentials
            <br />
            for everyday life.
          </p>
        </div>


        <div className="footer-column">

          <h4>SHOP</h4>

          <Link to="/shop">
            All Products
          </Link>

          <Link to="/collections">
            Collections
          </Link>

          <Link to="/shop?sort=newest">
            New Arrivals
          </Link>

        </div>


        <div className="footer-column">

          <h4>COMPANY</h4>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

        </div>


        <div className="footer-column">

          <h4>FOLLOW</h4>

          <a href="#" target="_blank">
            Instagram
          </a>

          <a href="#" target="_blank">
            Pinterest
          </a>

          <a href="#" target="_blank">
            TikTok
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 VELORA. ALL RIGHTS RESERVED.
        </span>

        <div>
          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>
        </div>

      </div>

    </footer>
  );
};

export default Footer;