import React from "react";
import { Shirt, Gem, Headphones, Watch, Camera, Dices } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const icons = [
    { name: "Mens Wear", icon: Shirt, route: "men" },
    { name: "Women's", icon: Gem, route: "women" },
    { name: "Headphones", icon: Headphones, route: "headphones" },
    { name: "Watch", icon: Watch, route: "watch" },
    { name: "Camera", icon: Camera, route: "camera" },
    { name: "Gaming", icon: Dices, route: "gaming" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto px-4 py-8 items-center justify-center">
        {/* Heading */}
        <div id="Heading" className="flex items-center gap-2">
          <div className="bg-red-400 h-5 w-10 rounded"></div>
          <div className="text-red-400 font-semibold">Categories</div>
        </div>

        {/* Categories */}
        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center ">
            {icons.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(`/category/${item.route}`)}
                className="group flex flex-col items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:bg-red-400 hover:-translate-y-2 transition-all cursor-pointer duration-300 w-[120px]"
              >
                {/* Icon */}
                <div className="p-3 bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-white">
                  <item.icon className="w-6 h-6 text-gray-600 group-hover:text-red-400" />
                </div>

                {/* Text */}
                <div className="text-sm font-medium text-gray-700 text-center group-hover:text-white">
                  {item.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-zinc-400 h-0.5 w-full"></div>
    </>
  );
}

export default Categories;
