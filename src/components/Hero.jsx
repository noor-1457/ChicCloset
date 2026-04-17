import React, { useEffect, useState } from "react";
import hero from "../assets/new-hero.png";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";

const images = [hero, hero2, hero3, hero4, hero5];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slider"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:bg-black/60 transition"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:bg-black/60 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
