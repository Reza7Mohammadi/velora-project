import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({
  product,
  isWishlist,
  onWishlist,
  cart,
  onAddToCart,
  onIncreaseQuantity,
  onRemoveFromCart,
  onDecreaseQuantity
}) => {

  const cartItem = cart.find( (item) => item.id === product.id);
  const isInCart = !!cartItem;


  return (
    <article className="product-card">

      {/* ================================
          PRODUCT IMAGE
      ================================= */}

      <Link
        to={`/shop/product/${product.id}`}
        className="product-image"
      >

        <img
          src={product.image}
          alt={product.name}
        />

        <span className="product-view">
          VIEW →
        </span>

      </Link>


      {/* ================================
          WISHLIST
      ================================= */}

      <button
        className={`product-wishlist ${
          isWishlist ? "is-wishlist" : ""
        }`}
        onClick={() => onWishlist(product.id)}
        aria-label={
          isWishlist
            ? "Remove from wishlist"
            : "Add to wishlist"
        }
      >
        {isWishlist ? "♥" : "♡"}
      </button>


      {/* ================================
          PRODUCT INFO
      ================================= */}

      <div className="product-info">

        <div className="product-details">

          <span className="product-category">
            {product.category}
          </span>

          <h3>
            {product.name}
          </h3>

        </div>


        <span className="product-price">
          ${product.price}
        </span>

      </div>


      {/* ================================
          CART
      ================================= */}

      {!isInCart ? (

  <button
    className="product-add"
    onClick={() => onAddToCart(product.id)}
  >
    ADD TO BAG

    <span>
      +
    </span>
  </button>

) : (

  <div className="product-quantity">

    {cartItem.quantity === 1 ? (

      <button
        className="quantity-delete"
        onClick={() =>
          onRemoveFromCart(product.id)
        }
        aria-label="Remove from bag"
      >
        ×
      </button>

    ) : (

      <button
        className="quantity-delete"
        onClick={() =>
          onDecreaseQuantity(product.id)
        }
        aria-label="Decrease quantity"
      >
        −
      </button>

    )}


    <span className="quantity-number">
      {cartItem.quantity}
    </span>


    <button
      className="quantity-plus"
      onClick={() =>
        onIncreaseQuantity(product.id)
      }
      aria-label="Increase quantity"
    >
      +
    </button>

  </div>

)}

    </article>
  );
};

export default ProductCard;


