import React from "react";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import Close from "../assests/images/icon-close.svg";
import Right from "../assests/images/icon-next.svg";
import Left from "../assests/images/icon-previous.svg";
function ProductImageGallery({ images, open, closed, imageIndex }) {
  const [display, setDisplay] = useState(imageIndex);

  useEffect(() => {
    setDisplay(imageIndex);
  }, [imageIndex]);
  const next = () => {
    setDisplay((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prev = () => {
    setDisplay((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        onClick={closed}
        className="fixed top-0 left-0 w-screen h-screen bg-gray-900 opacity-50 z-20"
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 w-3/4  lg:w-1/2 2xl:w-1/4 flex flex-col gap-4 z-30">
        <div className="flex justify-between">
          <span></span>{" "}
          <button>
            <img src={Close} alt="Close button" onClick={closed} />
          </button>{" "}
        </div>
        <article>
          <div className="flex relative ">
            <div className="flex relative overflow-hidden">
              {images.map((image, imageIndex) => (
                <img
                  style={{ display: imageIndex === display ? "block" : "none" }}
                  className="rounded-md"
                  src={image}
                  alt={`Image ${imageIndex + 1}`}
                  key={imageIndex}
                />
              ))}
            </div>
            <button
              onClick={() => next()}
              className="right-0 absolute top-1/2  -translate-y-1/2  translate-x-1/2 rounded-full bg-white py-3 px-4 aspect-square grid place-items-center"
            >
              <img src={Right} alt="Next Image" />
            </button>
            <button
              onClick={() => prev()}
              className="left-0 absolute top-1/2  -translate-y-1/2 -translate-x-1/2 rounded-full bg-white py-3 px-4 aspect-square grid place-items-center"
            >
              <img src={Left} alt="Previous Image" />
            </button>
          </div>
        </article>
        <section className="grid grid-cols-4 gap-12 px-6">
          {images.map((image, imageIndex) => {
            return (
              <img
                onClick={() => setDisplay(imageIndex)}
                key={imageIndex}
                src={image}
                alt={`Image ${imageIndex + 1}`}
                className="rounded-md aspect-square hover:border-2 border-orange-400  cursor-pointer hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
                style={{
                  border: imageIndex === display ? "2px solid #f6993f" : "",
                }}
              />
            );
          })}
        </section>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default ProductImageGallery;
