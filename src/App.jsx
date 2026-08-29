import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Collections from './pages/Collections/Collections';
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/ProductDetails/Product";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const handleWishlist = (id) => {

    setWishlist((prev) => {

      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }  

      return [...prev, id];

    });

  };





  const [cart, setCart] = useState([]);
  const handleAddToCart = (id) => {
  setCart((prev) => {

    const existingProduct = prev.find(
      (item) => item.id === id
    );

    if (existingProduct) {
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    }

    return [
      ...prev,
      {
        id: id,
        quantity: 1
      }
    ];
  });
};

const handleIncreaseQuantity = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    )
  );
};

const handleRemoveFromCart = (id) => {
  setCart((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

const handleDecreaseQuantity = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};






  return (
    <>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home  wishlist={wishlist} onWishlist={handleWishlist} cart={cart} onAddToCart={handleAddToCart}  onIncreaseQuantity={handleIncreaseQuantity}  onRemoveFromCart={handleRemoveFromCart} onDecreaseQuantity={handleDecreaseQuantity} />} />   
        <Route path="/shop" element={<Shop wishlist={wishlist} onWishlist={handleWishlist} cart={cart} onAddToCart={handleAddToCart}  onIncreaseQuantity={handleIncreaseQuantity}  onRemoveFromCart={handleRemoveFromCart} onDecreaseQuantity={handleDecreaseQuantity} />} />   
        <Route path="/shop/product/:id"  element={<Product wishlist={wishlist} onWishlist={handleWishlist} cart={cart} onAddToCart={handleAddToCart}  onIncreaseQuantity={handleIncreaseQuantity}  onRemoveFromCart={handleRemoveFromCart} onDecreaseQuantity={handleDecreaseQuantity} />} />
        <Route path="/collections" element={<Collections wishlist={wishlist} onWishlist={handleWishlist} cart={cart} onAddToCart={handleAddToCart}  onIncreaseQuantity={handleIncreaseQuantity}  onRemoveFromCart={handleRemoveFromCart} onDecreaseQuantity={handleDecreaseQuantity} />} />
        <Route path="/collections/:slug" element={<Collections wishlist={wishlist} onWishlist={handleWishlist} cart={cart} onAddToCart={handleAddToCart}  onIncreaseQuantity={handleIncreaseQuantity}  onRemoveFromCart={handleRemoveFromCart} onDecreaseQuantity={handleDecreaseQuantity} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onWishlist={handleWishlist} cart={cart} onAddToCart={handleAddToCart}  onIncreaseQuantity={handleIncreaseQuantity}  onRemoveFromCart={handleRemoveFromCart} onDecreaseQuantity={handleDecreaseQuantity} />} />
        <Route path="/cart" element={<Cart wishlist={wishlist} onWishlist={handleWishlist} cart={cart} onAddToCart={handleAddToCart}  onIncreaseQuantity={handleIncreaseQuantity}  onRemoveFromCart={handleRemoveFromCart} onDecreaseQuantity={handleDecreaseQuantity} />} />
      </Routes>
    </>
  );
}

export default App;