"use client"
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Correct import

const Gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
  });

  return (
    <div className="flex flex-col items-center bg-background-primary text-white">
      <div className="flex max-w-[1300px] flex-col items-center justify-center bg-background-primary py-10">
        <h1 className="py-10 text-center text-2xl uppercase text-white lg:text-5xl">
          Galerija
        </h1>
        <div className="p-2 md:p-0 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.className}`}
              onClick={() => openModal(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className={`w-full rounded-lg transition-transform duration-300 group-hover:brightness-50 ${image.imageClassname}`}
                width={image.width}
                height={image.height}
              />
              <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-xl font-medium uppercase text-white md:text-3xl lg:text-4xl">
                  {image.title}
                </h2>
                <p className="text-lg font-medium text-white md:text-xl lg:text-2xl">
                  {image.technique}
                </p>
                <p className="text-lg font-medium text-white md:text-xl lg:text-2xl">
                  {image.dimensions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    {...handlers} // Attach swipe handlers here
  >
    <button
      onClick={closeModal}
      className="absolute top-5 right-5 text-white text-6xl"
    >
      &times;
    </button>
    <div className="relative">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        width={800}
        height={600}
        className="rounded-lg"
      />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase">
          {images[currentIndex].title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          {images[currentIndex].technique}
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          {images[currentIndex].dimensions}
        </p>
      </div>
    </div>
    <button
      onClick={goToPrev}
      className="absolute left-10 text-white text-3xl"
    >
      &#8592;
    </button>
    <button
      onClick={goToNext}
      className="absolute right-10 text-white text-3xl"
    >
      &#8594;
    </button>
  </div>
)}
    </div>
  );
};

export default Gallery;
