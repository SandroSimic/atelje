"use client";
import React, { useState, useEffect } from "react";

export const Carousel = ({
  autoScroll = true,
  scrollInterval = 5000,
  children,
  renderDots = true,
  renderArrowsOutside = false,
  renderSideArrows = true,
  gap = 0,
  isSwipable = true,
  className = "",
  containerClassname = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  const itemsPerSlide = 1; // Static: Show 1 item per slide
  const totalSlides = React.Children.count(children);

  useEffect(() => {
    let intervalId = null;

    if (autoScroll) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, scrollInterval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoScroll, scrollInterval, totalSlides]);

  const handleTouchEnd = () => {
    if (startX !== null && endX !== null) {
      const distance = startX - endX;
      const threshold = 50;

      if (distance > threshold) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else if (distance < -threshold) {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      }
    }
    setStartX(null);
    setEndX(null);
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassname}`}
    >
      <div
        className={`relative overflow-hidden ${className}`}
        onTouchEnd={isSwipable ? handleTouchEnd : undefined}
        onTouchMove={(e) =>
          isSwipable ? setEndX(e.touches[0].clientX) : undefined
        }
        onTouchStart={(e) =>
          isSwipable ? setStartX(e.touches[0].clientX) : undefined
        }
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-none"
              style={{
                width: `${100 / itemsPerSlide}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      {renderDots && (
        <div className="mt-3 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              className={`h-3 w-3 cursor-pointer rounded-full transition duration-500 ease-in-out sm:h-4 sm:w-4 ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Arrows Navigation */}

      {renderSideArrows && (
        <>
          <div
            className="absolute left-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-xl border border-black text-3xl text-black sm:-left-5 sm:h-10 sm:w-10 md:flex"
            onClick={() =>
              setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? totalSlides - 1 : prevSlide - 1,
              )
            }
          >
            &#8249;
          </div>
          <div
            className="hidden absolute right-2 top-1/2 md:flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-xl border border-black text-3xl text-black sm:-right-5 sm:h-10 sm:w-10"
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
            }
          >
            &#8250;
          </div>
        </>
      )}
    </div>
  );
};
