import { Link } from "react-router-dom";
import products from "../../data/products";
import "./Cart.css";


const Cart = ({
  cart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
}) => {

  /* =================================
     GET CART PRODUCTS
  ================================= */

  const cartProducts = cart
    .map((item) => {

      const product = products.find(
        (product) => product.id === item.id
      );

      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
      };

    })
    .filter(Boolean);


  /* =================================
     EMPTY CART
  ================================= */

  if (cartProducts.length === 0) {

    return (
      <main className="cart-page">

        <section className="cart-empty">

          <span className="cart-eyebrow">
            YOUR BAG
          </span>

          <h1>
            YOUR BAG
            <br />
            IS EMPTY.
          </h1>

          <p>
            Discover pieces designed to become
            part of your everyday.
          </p>

          <Link
            to="/shop"
            className="cart-shop-button"
          >
            CONTINUE SHOPPING
            <span>→</span>
          </Link>

        </section>

      </main>
    );
  }


  /* =================================
     TOTAL
  ================================= */

  const subtotal = cartProducts.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );


  const shipping = subtotal >= 200 ? 0 : 12;


  const total = subtotal + shipping;


  /* =================================
     RENDER
  ================================= */

  return (
    <main className="cart-page">

      {/* ================================
          HEADER
      ================================= */}

      <header className="cart-header">

        <div>

          <span className="cart-eyebrow">
            YOUR BAG
          </span>

          <h1>
            YOUR
            <br />
            SELECTION.
          </h1>

        </div>

        <p>
          {cartProducts.length}{" "}
          {cartProducts.length === 1
            ? "ITEM"
            : "ITEMS"}
        </p>

      </header>


      {/* ================================
          CONTENT
      ================================= */}

      <div className="cart-layout">


        {/* ================================
            PRODUCTS
        ================================= */}

        <section className="cart-products">

          {cartProducts.map((product) => (

            <article
              className="cart-product"
              key={product.id}
            >

              {/* IMAGE */}

              <Link
                to={`/shop/product/${product.id}`}
                className="cart-product-image"
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

              </Link>


              {/* INFO */}

              <div className="cart-product-info">

                <div className="cart-product-details">

                  <span className="cart-product-category">
                    {product.category}
                  </span>

                  <h2>
                    {product.name}
                  </h2>

                  <span className="cart-product-price">
                    ${product.price}
                  </span>

                </div>


                {/* QUANTITY */}

                <div className="cart-product-actions">

                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        onDecreaseQuantity(product.id)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span>
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        onIncreaseQuantity(product.id)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                  </div>


                  {/* REMOVE */}

                  <button
                    className="cart-remove"
                    onClick={() =>
                      onRemoveFromCart(product.id)
                    }
                  >
                    REMOVE
                  </button>

                </div>

              </div>


              {/* ITEM TOTAL */}

              <span className="cart-item-total">
                $
                {product.price * product.quantity}
              </span>

            </article>

          ))}

        </section>


        {/* ================================
            SUMMARY
        ================================= */}

        <aside className="cart-summary">

          <span className="cart-summary-eyebrow">
            ORDER SUMMARY
          </span>

          <h2>
            YOUR BAG
          </h2>


          <div className="cart-summary-line">

            <span>
              Subtotal
            </span>

            <span>
              ${subtotal}
            </span>

          </div>


          <div className="cart-summary-line">

            <span>
              Shipping
            </span>

            <span>
              {shipping === 0
                ? "FREE"
                : `${shipping}`}
            </span>

          </div>


          {shipping > 0 && (

            <p className="cart-shipping-note">
              FREE SHIPPING ON ORDERS OVER $200
            </p>

          )}


          <div className="cart-summary-total">

            <span>
              TOTAL
            </span>

            <strong>
              ${total}
            </strong>

          </div>


          <button className="cart-checkout">
            CHECKOUT
            <span>→</span>
          </button>


          <Link
            to="/shop"
            className="cart-continue"
          >
            CONTINUE SHOPPING
          </Link>

        </aside>

      </div>

    </main>
  );
};


export default Cart;