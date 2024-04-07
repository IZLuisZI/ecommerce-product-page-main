import Cart from "../../images/icon-cart.svg";
function ProductDescription({
  productName,
  productPrice,
  productCount,
  setProductCount,
  productOriginalPrice,
  productDiscount,
  addToCart,
  MainPhoto,
}) {
  return (
    <div className="flex pt-48 ">
      <div>
        <section className="flex flex-col gap-8">
          <article>
            <h2 className="font-bold text-orange-400 text-2xl my-6">
              Sneaker Company
            </h2>
            <h1 className="font-bold text-4xl">{productName}</h1>
            <p className="text-gray-400 mt-8 font-semibold">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
          </article>
          <section>
            <article className="grid grid-cols-2 w-fit gap-3">
              <h3 className="font-bold text-3xl">${productPrice}</h3>
              <div className="flex items-center p-2 bg-orange-200 w-fit rounded-md text-orange-700 font-bold">
                {productDiscount}%
              </div>
              <div className="text-gray-400 font-bold">
                <strike> ${productOriginalPrice}</strike>
              </div>
            </article>
          </section>
          <section className="flex gap-12 items-center">
            <div className="flex bg-blue-50 rounded-md w-fit  font-bold gap-4 items-center">
              <button
                onClick={() => setProductCount(Math.max(productCount - 1, 1))}
                className="text-orange-400 p-3 cursor-pointer"
              >
                -
              </button>
              <div>{productCount}</div>
              <button
                onClick={() => setProductCount(productCount + 1)}
                className="text-orange-400 p-3 cursor-pointer"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() =>
                  addToCart({
                    productName,
                    productPrice,
                    productCount,
                    MainPhoto,
                  })
                }
                className="bg-orange-600 hover:bg-orange-500 rounded-md flex py-3 px-12 gap-2 font-semibold text-white"
              >
                <img src={Cart} alt="Cart icon" />
                Add to cart
              </button>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
export default ProductDescription;
