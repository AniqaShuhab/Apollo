"use client";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/about/about-1.jpg", // Image of trading floor with multiple monitors
      alt: "Modern trading floor setup with multiple monitor workstations"
    },
    {
      image: "/images/about/about-2.jpg", // Image of developer workspace with code
      alt: "Developer workspace with coding environment"
    },
    {
      image: "/images/about/about-3.jpg", // Image of modern tech office
      alt: "Modern tech office environment"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-8 dark:border-white/[.15] md:pb-10 lg:pb-12">
          <div className="relative h-[200px] md:h-[300px] w-full max-w-[1000px] mx-auto rounded-lg overflow-hidden shadow-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover w-full h-full rounded-lg"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index
                      ? "bg-primary"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;