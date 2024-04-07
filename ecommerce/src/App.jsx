import { useState } from "react";
import Header from "./Header.jsx";
import Product from "./Product.jsx";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.productName === item.productName
    );

    if (existingItem) {
      // Update the count of the existing item
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.productName === item.productName
            ? { ...cartItem, productCount: item.productCount }
            : cartItem
        )
      );
    } else {
      // Add the new item to the cart
      setCartItems([...cartItems, item]);
    }
  };
  return (
    <>
      <Header
        cartItems={cartItems}
        addToCart={addToCart}
        setCartItems={setCartItems}
      />{" "}
      <Product addToCart={addToCart} />
    </>
  );
}

export default App;
