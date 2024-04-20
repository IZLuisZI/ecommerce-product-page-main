import useCart from "../hooks/State.js";

export const addToCart = (item, cartItems, setCartItems) => {
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
