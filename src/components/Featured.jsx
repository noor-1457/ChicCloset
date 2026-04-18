import React from "react";
import ps5 from "../assets/play-station-5.jpg";
import hat from "../assets/hat.jpg";
import speaker from "../assets/speakers.webp";
import perfume from "../assets/gucci.jpg";
import { Truck, HandCoins, Headphones } from "lucide-react";

function Featured() {
  const icons = [
    {
      title: "Free And Fast Delivery",
      icon: Truck,
    },
    {
      title: "24/7 Customer Service",
      icon: Headphones,
    },
    {
      title: "Money Back Guarantee",
      icon: HandCoins,
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <div className="bg-red-400 h-5 w-10 rounded"></div>
          <div className="text-red-400">Featured</div>
        </div>

        <h1 className="text-2xl font-bold mt-2 mb-6">New Arrivals</h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
          {/* LEFT BIG IMAGE */}
          <div className="md:col-span-2 h-[250px] md:h-full relative">
            <img
              src={hat}
              alt=""
              className=" h-full object-cover rounded-lg fade"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-xl md:text-2xl text-white font-semibold absolute bottom-20 left-5">
                Women’s Collections
              </span>

              <p className="text-sm md:text-lg text-white italic absolute bottom-10 left-5">
                "Featured Women collection that gives you another vibe."
              </p>

              <button className="border-b-2 border-red-400 cursor-pointer bg-transparent text-white absolute bottom-4 left-5">
                Shop Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* TOP */}
            <div className="h-[250px] md:h-1/2 relative">
              <img
                src={perfume}
                alt=""
                className=" h-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-lg md:text-xl text-white font-semibold absolute bottom-16 left-5">
                  Perfume
                </span>

                <p className="text-sm md:text-base text-white italic absolute bottom-10 left-5">
                  "GUCCI intense OUD"
                </p>

                <button className="border-b-2 border-red-400 cursor-pointer bg-transparent text-white absolute bottom-4 left-5">
                  Shop Now
                </button>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="flex gap-4 h-[250px] md:h-1/2">
              {/* PS5 */}
              <div className="w-1/2 relative">
                <img
                  src={ps5}
                  alt=""
                  className=" h-full object-cover rounded-lg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-sm md:text-xl text-white font-semibold absolute bottom-19 left-2">
                    Play Station 5
                  </span>

                  <p className="text-xs md:text-sm text-white italic absolute bottom-10 left-2">
                    "Black and White version now on sale."
                  </p>

                  <button className="border-b-2 border-red-400 cursor-pointer bg-transparent text-white absolute bottom-4 left-2">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* SPEAKER */}
              <div className="w-1/2 relative">
                <img
                  src={speaker}
                  alt=""
                  className=" h-full object-cover rounded-lg"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent">
                  <span className="text-sm md:text-xl text-white font-semibold absolute bottom-19 left-2">
                    Speakers
                  </span>

                  <p className="text-xs md:text-sm text-white italic absolute bottom-10 left-2">
                    "Amazon's wireless speakers."
                  </p>

                  <button className="border-b-2 border-red-400 cursor-pointer bg-transparent text-white absolute bottom-4 left-2">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last section */}
      <div className="container mt-20 flex items-center justify-center gap-8">
        {icons.map((items, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-white p-4 rounded-xl  hover:shadow-md hover:-translate-y-2 transition-all duration-300 cursor-pointer w-[120px]"
          >
            <div className="p-3.5 bg-gray-400 rounded-full ">
              <div className="p-3 bg-black rounded-full ">
                <items.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="text-sm font-medium text-black text-center">
              {items.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Featured;
