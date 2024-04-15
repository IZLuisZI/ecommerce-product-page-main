import MainPhoto from "../../images/image-product-1.jpg";
import { useContext } from "react";
import { CartContext } from "./App.jsx";
import ProductGallery from "./ProductGallery.jsx";
import ProductDescription from "./ProductDescription.jsx";
import Image2 from "../../images/image-product-2.jpg";
import Image3 from "../../images/image-product-3.jpg";
import Image4 from "../../images/image-product-4.jpg";
import { useState } from "react";

function Product() {
  const [productCount, setProductCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  return (
    <section className="md:mt-16 mb-12 xl:mx-24 xl:px-8 2xl:mx-64 2xl:px-24 grid sm:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-12">
      <ProductGallery
        images={MainPhoto}
        imagesArray={[MainPhoto, Image2, Image3, Image4]}
      />
      <ProductDescription
        MainPhoto={MainPhoto}
        productName="Fall Limited Edition Sneakers"
        productPrice={125.0}
        productOriginalPrice={250.0}
        productCount={productCount}
        productDiscount={50}
        setProductCount={setProductCount}
        addToCart={addToCart}
      />
    </section>
  );
}
export default Product;
