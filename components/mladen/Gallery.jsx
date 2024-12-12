"use client";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Gallery = () => {
  const images = [
    {
      src: "/images/odsutnost1.jpg",
      alt: "Odsutnost 1",
      title: "ODSUTNOST BR.1",
      technique: "Grafitna olovka na papiru",
      dimensions: "61x98cm",
      className: "lg:col-span-6",
      imageClassname: "h-[350px] md:h-[400px] lg:h-[450px] w-full",
      width: 500,
      height: 500,
    },
    {
      src: "/images/odsutnost2.jpg",
      alt: "Odsutnost 2",
      title: "ODSUTNOST BR.2",
      technique: "Grafitna olovka na papiru",
      dimensions: "67x100cm",
      className: "lg:col-span-6",
      imageClassname: "h-[350px] md:h-[400px] lg:h-[450px] w-full",
      width: 500,
      height: 500,
    },
    {
      src: "/images/traktor.jpg",
      alt: "Tractor image",
      title: "TRACTOR",
      technique: "Grafitna olovka na papiru",
      dimensions: "70x100cm",
      className: "lg:col-span-3",
      imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
      width: 500,
      height: 500,
    },
    {
      src: "/images/oblak.jpg",
      alt: "Oblak",
      title: "OBLAK",
      technique: "Grafit na papiru",
      dimensions: "16x16cm",
      className: "lg:col-span-6 lg:row-span-3",
      imageClassname: "h-[350px] md:h-[400px] lg:h-full w-full",
      width: 500,
      height: 500,
    },
    {
      src: "/images/lopte.jpg",
      alt: "Lopte",
      title: "LOPTE",
      technique: "Grafitna olovka na papiru",
      dimensions: "50x70cm",
      className: "lg:col-span-3 lg:row-start-2",
      imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
      width: 500,
      height: 500,
    },
    {
      src: "/images/pistolj.jpg",
      alt: "Pistolj",
      title: "PISTOLJ",
      technique: "Grafitna olovka na papiru",
      dimensions: "66x99cm",
      className: "lg:col-span-3 lg:row-start-3",
      imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
      width: 500,
      height: 500,
    },
    {
      src: "/images/slika3.jpg",
      alt: "Slika 3",
      title: "SLIKA 3",
      technique: "Grafitna olovka na papiru",
      dimensions: "50x70cm",
      className: "lg:col-span-3 lg:row-start-3",
      imageClassname: "h-[350px] md:h-[400px] lg:h-[225px] w-full",
      width: 500,
      height: 500,
    },
    {
      src: "/images/odsutnost3.jpg",
      alt: "Odsutnost 3",
      title: "ODSUTNOST BR.3",
      technique: "Grafitna olovka na papiru",
      dimensions: "70x100cm",
      className: "lg:col-span-6 lg:row-start-4",
      imageClassname: "h-[350px] md:h-[400px] lg:h-[450px] w-full",
      width: 500,
      height: 500,
    },
  ];


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
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
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
        <div className="grid grid-cols-1 gap-5 p-2 md:grid-cols-2 md:p-0 lg:grid-cols-12">
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
            className="absolute right-5 top-5 text-6xl text-white"
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform text-center text-white">
              <h2 className="text-xl uppercase sm:text-2xl md:text-3xl lg:text-4xl">
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
            className="absolute left-10 text-3xl text-white"
          >
            &#8592;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-10 text-3xl text-white"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
