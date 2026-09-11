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

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home   />} />   
        <Route path="/shop" element={<Shop />} />   
        <Route path="/shop/product/:id"  element={<Product />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:slug" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart  />} />
      </Routes>
    </>
  );
}

export default App;

//   const [cart, setCart] = useState([]);
//   const handleAddToCart = (id) => {
//   setCart((prev) => {

//     const existingProduct = prev.find(
//       (item) => item.id === id
//     );

//     if (existingProduct) {
//       return prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: item.quantity + 1
//             }
//           : item
//       );
//     }

//     return [
//       ...prev,
//       {
//         id: id,
//         quantity: 1
//       }
//     ];
//   });
// };

// const handleIncreaseQuantity = (id) => {
//   setCart((prev) =>
//     prev.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             quantity: item.quantity + 1
//           }
//         : item
//     )
//   );
// };

// const handleRemoveFromCart = (id) => {
//   setCart((prev) =>
//     prev.filter((item) => item.id !== id)
//   );
// };

// const handleDecreaseQuantity = (id) => {
//   setCart((prev) =>
//     prev
//       .map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: item.quantity - 1,
//             }
//           : item
//       )
//       .filter((item) => item.quantity > 0)
//   );
// };
