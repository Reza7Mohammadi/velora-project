import { Link } from "react-router-dom";

import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Wishlist.css";


const Wishlist = ({ wishlist, onWishlist,cart, onAddToCart, onIncreaseQuantity, onRemoveFromCart,onDecreaseQuantity }) => {

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );


  return (
    <main className="wishlist">

      {/* ================================
          HEADER
      ================================= */}

      <section className="wishlist-header">

        <div>

          <span className="wishlist-eyebrow">
            SAVED PIECES
          </span>

          <h1>
            YOUR
            <br />
            WISHLIST.
          </h1>

        </div>


        <div className="wishlist-count">

          <span>
            {wishlistProducts.length}
          </span>

          <p>
            {wishlistProducts.length === 1
              ? "ITEM SAVED"
              : "ITEMS SAVED"}
          </p>

        </div>

      </section>


      {/* ================================
          EMPTY STATE
      ================================= */}

      {wishlistProducts.length === 0 ? (

        <section className="wishlist-empty">

          <div className="wishlist-empty-mark">
            ♡
          </div>

          <h2>
            NOTHING SAVED YET.
          </h2>

          <p>
            Discover pieces you love and save them
            <br />
            here for later.
          </p>

          <Link
            to="/shop"
            className="wishlist-shop-link"
          >
            EXPLORE SHOP →
          </Link>

        </section>

      ) : (

        /* ================================
           PRODUCTS
        ================================= */

        <section className="wishlist-products">

          {wishlistProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              isWishlist={true}
              onWishlist={onWishlist}
              cart={cart}
              onAddToCart={onAddToCart}
              onIncreaseQuantity={onIncreaseQuantity}
              onRemoveFromCart={onRemoveFromCart} 
              onDecreaseQuantity={onDecreaseQuantity}
            />

          ))}

        </section>

      )}

    </main>
  );
};


export default Wishlist;