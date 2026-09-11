import { Link, useParams } from "react-router-dom";
import products from "../../data/products";
import "./Product.css";
import { useSelector ,useDispatch } from "react-redux";
import { addToCart,removeFromCart,increaseQuantity,decreaseQuantity } from "../../features/cart/cartSlice";
import { handleWishlist } from "../../features/wishlist/wishlistSlice";


const Product = () => {

  const cart = useSelector(state=>state.cart.items);
  const dispatch =useDispatch();

  const { id } = useParams();

  const wishlist = useSelector(state=>state.wishlist);

  const product = products.find(
    (p) => p.id === Number(id)
  );


  if (!product) {
    return (
      <main className="product-not-found">

        <p>PRODUCT NOT FOUND</p>

        <Link to="/shop">
          ← BACK TO SHOP
        </Link>

      </main>
    );
  }

  const isWishlist= wishlist.includes(product.id);



  const cartItem = cart.find(
    (item) => item.id === product.id
  );
  const isInCart = !!cartItem;




  return (
    <main className="product-page">

      <section className="product-detail">

        <div className="product-detail-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="product-detail-info">

          <span className="product-category">
            {product.category}
          </span>


          <h1>
            {product.name}
          </h1>


          <p className="product-price">
            ${product.price}
          </p>


          <div className="product-description">

            <p>
              Thoughtfully designed for everyday
              wear, combining timeless style with
              effortless comfort.
            </p>

          </div>


          <div className="product-actions">

            { /* cart */ }
             {!isInCart ? (
                 <button className="product-ad" onClick={() => dispatch(addToCart(product))} >
                    ADD TO BAG 
                    <span>  +  </span>
                 </button>) : 
                 (
              <div className="product-quant">
                  {cartItem.quantity === 1 ? (
                      <button className="quantity-del" onClick={() => dispatch(removeFromCart(product.id))} aria-label="Remove from bag" >
                        ×
                      </button>) : (
                      <button className="quantity-del" onClick={() => dispatch(decreaseQuantity(product.id))} aria-label="Decrease quantity" >
                        −
                      </button>
                  )}
                  <span className="quantity-num">
                     {cartItem.quantity}
                  </span>
                  <button  className="quantity-plu" onClick={() => dispatch(increaseQuantity(product.id))} aria-label="Increase quantity" >
                     +
                  </button>
              </div>

)}


              
              
               <button className="wishlist-button"  onClick={()=>{dispatch(handleWishlist(product.id))}}>
                {isWishlist ? "♥" : "♡"}
               </button>

          </div>



          <div className="product-meta">

            <div>
              <span>PRODUCT</span>
              <strong>VELORA ESSENTIAL</strong>
            </div>

            <div>
              <span>CATEGORY</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>PRODUCT ID</span>
              <strong>#{product.id}</strong>
            </div>

          </div>


          <Link
            to="/shop"
            className="back-to-shop"
          >
            ← BACK TO SHOP
          </Link>

        </div>

      </section>

    </main>
  );
};


export default Product;