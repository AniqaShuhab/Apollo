"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Add your slider images here
  const slides = [
    "/images/video/video-6.jpg",
    "/images/video/video-5.jpg",  // Add your actual image paths
    "/images/video/video-4.jpg",
    "/images/video/video-3.jpg",
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Explore some of our latest projects"
          paragraph="Apollo empowers hundreds of clients globally to embrace modern technology and elevate customer experiences."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src={slides[currentSlide]} alt={`slide ${currentSlide + 1}`} fill />
                
                {/* Dots navigation */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        currentSlide === index ? "bg-primary w-4" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
