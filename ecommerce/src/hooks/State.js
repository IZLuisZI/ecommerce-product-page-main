import { useState, createContext } from "react";

export const CartContext = createContext();

export default function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  return { cartItems, setCartItems, open, setOpen };
}
