import Header from "./Header.jsx";
import Product from "./Product.jsx";
import { CartContext } from "../hooks/State.js";
import useCart from "../hooks/State.js";
import { addToCart } from "../logic/AddToCart.js";

function App() {
  const { cartItems, setCartItems } = useCart();

  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
        <Header /> <Product />
      </CartContext.Provider>
    </>
  );
}

export default App;
