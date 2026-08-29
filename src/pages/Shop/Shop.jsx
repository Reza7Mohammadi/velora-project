import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link,useParams } from "react-router-dom";
import "./Shop.css";


const Shop = ({wishlist,onWishlist,cart, onAddToCart, onIncreaseQuantity, onRemoveFromCart,onDecreaseQuantity}) => {
  
const {id} = useParams();


  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState("featured");


  const product = products.filter((p)=>p.id === id);
  console.log(product);
 if(id && product){ 
    return(
        <>
          <ProductCard 
          product={product} 
          isWishlist={wishlist.includes(product.id)} 
          onWishlist={onWishlist}
          cart={cart}
          onAddToCart={onAddToCart}
          onIncreaseQuantity={onIncreaseQuantity}
          onRemoveFromCart={onRemoveFromCart}
          onDecreaseQuantity={onDecreaseQuantity}
          ></ProductCard>
          <Link to='/shop' />
        </>
    )
}


  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "ALL" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {

    if (sort === "price-low") {
      return a.price - b.price;
    }

    if (sort === "price-high") {
      return b.price - a.price;
    }

    if (sort === "name") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });


  return (
    <main className="shop">

      <section className="shop-header">

        <div>
          <span className="shop-label">
            THE VELORA STORE
          </span>

          <h1>
            SHOP
          </h1>
        </div>

        <p>
          Discover our collection of
          <br />
          modern everyday essentials.
        </p>

      </section>


      <section className="shop-controls">

        <div className="shop-search">
            <span className="search-icon">⌕</span>
            <input type="text"  placeholder="SEARCH PRODUCTS..." value={search}onChange={(e) => setSearch(e.target.value)} />
        </div>


        <div className="shop-filter">

          {["ALL", "OUTERWEAR", "KNITWEAR", "TROUSERS","FOOTWEAR","ACCESSORIES"].map((item) =>(   

            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>


        <div className="shop-sort">

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">
              FEATURED
            </option>

            <option value="price-low">
              PRICE: LOW TO HIGH
            </option>

            <option value="price-high">
              PRICE: HIGH TO LOW
            </option>

            <option value="name">
              NAME: A TO Z
            </option>
          </select>

        </div>

      </section>


      <div className="shop-results">

        <span>
          {sortedProducts.length} PRODUCTS
        </span>

      </div>


      <section className="shop-grid">

        {sortedProducts.map((product) => (

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

      </section>

    </main>
  );
};

export default Shop;


