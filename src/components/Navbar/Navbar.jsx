import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close mobile menu when viewport reaches desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          VELORA
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="navbar-links">
        <NavLink to="/" end>
          HOME
        </NavLink>

        <NavLink to="/shop">
          SHOP
        </NavLink>

        <NavLink to="/collections">
          COLLECTIONS
        </NavLink>

        <NavLink to="/about">
          ABOUT
        </NavLink>
      </nav>

      {/* Desktop Actions */}
      <div className="navbar-actions">

        <NavLink to="/wishlist" aria-label="Wishlist">
          ♡
        </NavLink>

        <NavLink
          to="/cart"
          className="navbar-cart"
          aria-label="Shopping cart"
        >
          <ShoppingBag size={20} strokeWidth={1.5} />

          {cart.length > 0 && (
            <span className="cart-count">
              {cart.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </span>
          )}
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="navbar-menu-button"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <NavLink to="/" end onClick={closeMenu}>
          HOME
        </NavLink>

        <NavLink to="/shop" onClick={closeMenu}>
          SHOP
        </NavLink>

        <NavLink to="/collections" onClick={closeMenu}>
          COLLECTIONS
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          ABOUT
        </NavLink>

        <NavLink to="/wishlist" onClick={closeMenu}>
          WISHLIST
        </NavLink>

        <NavLink to="/cart" onClick={closeMenu}>
          CART
        </NavLink>
      </nav>

    </header>
  );
};

export default Navbar;