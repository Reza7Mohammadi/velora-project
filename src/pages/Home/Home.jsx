import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products"; 
import Categories from "../../components/Categories/Categories";
import BrandStory from "../../components/BrandStory/BrandStory";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home = ({wishlist,onWishlist,cart, onAddToCart, onIncreaseQuantity, onRemoveFromCart,onDecreaseQuantity}) => {
  return (
    <>
      <Hero />
      <Products 
      wishlist={wishlist} 
      onWishlist={onWishlist}
      cart={cart}
      onAddToCart={onAddToCart}
      onIncreaseQuantity={onIncreaseQuantity}
      onRemoveFromCart={onRemoveFromCart}
      onDecreaseQuantity={onDecreaseQuantity}
      />
      <Categories /> 
      <BrandStory />
      <Newsletter />
      <Footer />      
    </> 
  );
};

export default Home;