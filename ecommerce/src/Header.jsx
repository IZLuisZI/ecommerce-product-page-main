import Logo from "../../images/logo.svg";
import Cart from "../../images/icon-cart.svg";
import Avatar from "../../images/image-avatar.png";
import HeaderNav from "./Headernav.jsx";
import { useState } from "react";
import CartSummary from "./CartSummary.jsx";
function Header({ cartItems, addToCart, setCartItems }) {
  const [open, setOpen] = useState(false);
  function handleCartState() {
    setOpen(!open);
  }
  return (
    <header className="flex justify-around py-12 relative after:h-px after:w-full after:absolute after:bottom-0 after:left-0 after:bg-slate-200">
      <div className="flex gap-8 items-center">
        <div className="flex gap-4 items-center">
          <button className="md:hidden">
            <svg
              className="w-8 h-8 text-gray-400 hover:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <figure>
            <img
              src={Logo}
              alt="Sneaker Logo"
              className="hover:border-2 hover:border-orange-600"
            />
          </figure>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-semibold text-gray-400">
            <HeaderNav Link="#" name="Collection" />
            <HeaderNav Link="#" name="Men" />
            <HeaderNav Link="#" name="Women" />
            <HeaderNav Link="#" name="About" />
            <HeaderNav Link="#" name="Contact" />
          </ul>
        </nav>
      </div>
      <div className="flex gap-6 items-center">
        <div className="relative">
          <article onClick={() => handleCartState()} className="cursor-pointer">
            <img src={Cart} alt="Cart" />
          </article>
          {open && (
            <CartSummary
              openCart={open}
              cartItems={cartItems}
              addToCart={addToCart}
              setCartItems={setCartItems}
            />
          )}
        </div>

        <div className="hover:outline hover:outline-orange-600 rounded-full">
          <img className="h-12" src={Avatar} alt="User profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
