import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products"; 
import Categories from "../../components/Categories/Categories";
import BrandStory from "../../components/BrandStory/BrandStory";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Categories /> 
      <BrandStory />
      <Newsletter />
      <Footer />      
    </> 
  );
};

export default Home;