import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useSelector ,useDispatch } from "react-redux";
import { addToCart,removeFromCart,increaseQuantity,decreaseQuantity } from "../../features/cart/cartSlice";
import { handleWishlist } from "../../features/wishlist/wishlistSlice";

const ProductCard = ({
  product,
}) => {

  const cart = useSelector(state=>state.cart.items);
  const dispatch =useDispatch();

  const cartItem = cart.find( (item) => item.id === product.id);
  const isInCart = !!cartItem;

  const wishlist = useSelector(state=>state.wishlist);
  const isWishlist = wishlist.includes(product.id)

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
        onClick={() => dispatch(handleWishlist(product.id))}
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
    onClick={() => dispatch(addToCart(product))}
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
          dispatch(removeFromCart(product.id))
        }
        aria-label="Remove from bag"
      >
        ×
      </button>

    ) : (

      <button
        className="quantity-delete"
        onClick={() =>
          dispatch(decreaseQuantity(product.id))
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
        dispatch(increaseQuantity(product.id))
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


