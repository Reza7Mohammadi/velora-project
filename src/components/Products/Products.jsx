import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import products from "../../data/products";
import "./Products.css";

const Products = ({wishlist,onWishlist,cart, onAddToCart, onIncreaseQuantity, onRemoveFromCart,onDecreaseQuantity}) => {

  const featuredProducts = products.slice(0, 4);

  return (
    <section className="products">

      <div className="products-header">

        <div>
          <span className="products-label">
            CURATED FOR YOU
          </span>

          <h2>
            FEATURED PIECES
          </h2>
        </div>

      </div>


      <div className="products-grid">

        {featuredProducts.map((product) =>(  
          <ProductCard
            key={product.id}
            product={product}
            isWishlist={wishlist.includes(product.id)}
            onWishlist={onWishlist}
            cart={cart}
            onAddToCart={onAddToCart}
            onIncreaseQuantity={onIncreaseQuantity}
            onRemoveFromCart={onRemoveFromCart} 
            onDecreaseQuantity={onDecreaseQuantity}
          />
        ))}           

      </div>


      <div className="products-action">

        <Link to="/shop">
          SHOP ALL PRODUCTS
          <span>→</span>
        </Link>

      </div>

    </section>
  );
};

export default Products;

