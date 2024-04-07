import MainPhoto from "../../images/image-product-1.jpg";
import ProductGallery from "./ProductGallery.jsx";
import ProductDescription from "./ProductDescription.jsx";
import Image2 from "../../images/image-product-2.jpg";
import Image3 from "../../images/image-product-3.jpg";
import Image4 from "../../images/image-product-4.jpg";
import { useState } from "react";

function Product({ addToCart }) {
  const [productCount, setProductCount] = useState(1);
  return (
    <section className="mt-16 mx-96 px-24 grid grid-cols-2 gap-12">
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
