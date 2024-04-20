import ProductImageGallery from "./ProductImageGallery.jsx";
import { useState } from "react";
import useCart from "../hooks/State.js";
function ProductGallery({ images, imagesArray }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { open, setOpen } = useCart();

  const handleImageClick = (index) => {
    setOpen(true);
    setSelectedImageIndex(index);
  };

  const handleOpenGallery = () => {
    setOpen(true);
    setSelectedImageIndex(0);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="pt-12 px-0 md:px-12 pb-6">
        <img
          src={images}
          alt={`Main image`}
          className="md:rounded-2xl aspect-square"
        />
      </div>
      <ProductImageGallery
        images={imagesArray}
        open={open}
        closed={() => setOpen(false)}
        imageIndex={selectedImageIndex}
      />
      <div className="sm:grid grid-cols-4 px-12 hidden gap-4 xl:gap-12">
        {imagesArray.slice(0, 3).map((image, index) => (
          <img
            onClick={() => handleImageClick(index)}
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="rounded-2xl aspect-square hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer hover:border-2 border-orange-400 hover:opacity-80"
          />
        ))}
        <div
          onClick={() => handleOpenGallery()}
          className="grid place-items-center hover:border-2 border-orange-400 hover:opacity-80 aspect-square rounded-md bg-slate-300 cursor-pointer"
        >
          see All
        </div>
      </div>
    </div>
  );
}
export default ProductGallery;
