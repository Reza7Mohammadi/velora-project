import { Link, useParams } from "react-router-dom";
import categories from "../../data/categories";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Collections.css";

const Collections = ({wishlist,onWishlist,cart, onAddToCart, onIncreaseQuantity, onRemoveFromCart,onDecreaseQuantity}) => {

  const { slug } = useParams();
  // ================================
  // ALL COLLECTIONS
  // ================================

  if (!slug) {

    return (
      <main className="collections">
        <section className="collections-header">
          <div>
            <span>THE VELORA COLLECTIONS</span>
            <h1>
              FIND YOUR
              <br />
              EVERYDAY STYLE.
            </h1>
          </div>
          <p>
            Explore thoughtfully designed collections
            <br />
            created for modern everyday living.
          </p>
        </section>

        <section className="collections-grid">
          {categories.map((category) => ( 
            <Link
              key={category.id}
              to={`/collections/${category.slug}`}
              className="collection-card"
            >
              <img
                src={category.image}
                alt={category.name}
              />
              <div className="collection-card-overlay">
                <span>
                  COLLECTION
                </span>
                <h2>
                  {category.name}
                </h2>
                <strong>
                  EXPLORE →
                </strong>
              </div>
            </Link>
          ))}
        </section>
      </main>
    );
  }


  // ================================
  // SINGLE COLLECTION
  // ================================

  const category = categories.find(
    (item) => item.slug === slug
  );
  // اگر slug اشتباه باشد

  if (!category) {
    return (
      <main className="collection-not-found">
        <h1>
          COLLECTION NOT FOUND
        </h1>
        <Link to="/collections">
          BACK TO COLLECTIONS →
        </Link>
      </main>
    );
  }
  const collectionProducts = products.filter(
    (product) => product.category === category.name
  );


  return (
    <main className="collection-single">
      <section className="collection-hero">
        <div className="collection-hero-image">
          <img
            src={category.image}
            alt={category.name}
          />
        </div>
        <div className="collection-hero-content">
          <span>
            VELORA COLLECTION
          </span>
          <h1>
            {category.name}
          </h1>
          <p>
            Discover our selection of thoughtfully
            designed pieces made for everyday life.
          </p>
          <Link to="/collections">
            ← ALL COLLECTIONS
          </Link>
        </div>
      </section>

      <section className="collection-products">
        <div className="collection-products-header">
          <div>
            <span>
              {category.name}
            </span>
            <h2>
              {collectionProducts.length} PIECES
            </h2>
          </div>
          <p>
            Designed to become part
            <br />
            of your everyday wardrobe.
          </p>        </div>
        <div className="collection-products-grid">
          {collectionProducts.map((product) => ( 
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
      </section>
    </main>
  );
};


export default Collections;


