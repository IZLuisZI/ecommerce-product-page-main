import Delete from "../../images/icon-delete.svg";

function CartSummary({ openCart, cartItems, setCartItems }) {
  function handleRemove(itemToRemove) {
    const updatedCartItems = cartItems.filter(
      (item) => item.productName !== itemToRemove.productName
    );
    setCartItems(updatedCartItems);
  }

  if (!openCart) {
    return null;
  }
  return (
    <div className="absolute flex flex-col left-0 -translate-x-3/4 lg:-translate-x-1/2 top-full border border-gray-200 shadow-2xl bg-white rounded-md z-10 w-80">
      <div className="p-4 font-bold border-b-2 border-gray-200">Cart</div>
      <div className="p-4 text-center flex flex-col gap-2 text-gray-400 font-bold">
        {cartItems &&
          cartItems.map((item, index) => (
            <div key={index} className="font-normal flex justify-between h-12">
              <div>
                <img
                  className="rounded-md h-full"
                  src={item.MainPhoto}
                  alt="Product"
                />
              </div>
              <div>
                <div>{item.productName}</div>
                <div className="text-start">
                  <span>
                    ${item.productPrice} <span>x</span>{" "}
                    <span>{item.productCount}</span>{" "}
                  </span>
                  <span className="font-bold text-black">
                    ${item.productPrice * item.productCount}
                  </span>
                </div>
              </div>
              <div
                title="Remove Item"
                onClick={() => handleRemove(item)}
                className="flex items-center cursor-pointer"
              >
                <img src={Delete} alt="Remove Item" />
              </div>
            </div>
          ))}
        {cartItems.length > 0 && (
          <button className="bg-orange-600 text-white p-3 rounded-md">
            Checkout
          </button>
        )}
        {cartItems.length === 0 && <div>No items in cart</div>}
      </div>
    </div>
  );
}
export default CartSummary;
