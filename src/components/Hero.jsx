import React, { useEffect, useState } from "react";
import hero from "../assets/new-hero.png";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";

const images = [hero, hero2, hero3, hero4, hero5];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-auto sm:h-96 overflow-hidden rounded-xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slider"
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white px-3 py-2 rounded"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white px-3 py-2 rounded"
      >
        ❯
      </button>
    </div>
  );
}

export default Hero;
