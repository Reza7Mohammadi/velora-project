import { NavLink, Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import "./Navbar.css";

const Navbar = ({cart}) => {
  return ( 
    <header className="navbar">

      <div className="navbar-logo">
        <Link to="/">VELORA</Link>
      </div>

      <nav className="navbar-links">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/collections">COLLECTIONS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </nav>

      <div className="navbar-actions">
        <NavLink to="/wishlist" aria-label="Wishlist">
           ♡
        </NavLink>

        <NavLink to="/cart" className="navbar-cart">
          <ShoppingBag size={20} strokeWidth={1.5} />
            {cart.length > 0 && (  
            <span className="cart-count">
             {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
             )}
        </NavLink> 
      </div>

    </header>
  );
};

export default Navbar;  