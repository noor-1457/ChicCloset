import React from "react";
import { Shirt, Gem, Headphones, Watch, Camera, Dices } from "lucide-react";

function Categories() {
  const icons = [
    { name: "Mens Wear", icon: Shirt },
    { name: "Women's", icon: Gem },
    { name: "Headphones", icon: Headphones },
    { name: "Watch", icon: Watch },
    { name: "Camera", icon: Camera },
    { name: "Gaming", icon: Dices },
  ];
  return (
    <>
      <div className=" container mx-auto px-4 py-8 items-center justify-center">
        {/* heading */}
        <div id="Heading" className="flex items-center gap-2">
          <div className="bg-red-400 h-5 w-10  rounded"></div>
          <div className="text-red-400">Categories</div>
        </div>
        {/* categories */}
        <div className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
            {icons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 cursor-pointer w-[120px]"
              >
                <div className="p-3 bg-gray-100 rounded-full group-hover:bg-red-100 transition">
                  <item.icon className="w-6 h-6 text-gray-600 group-hover:text-red-500" />
                </div>

                <div className="text-sm font-medium text-gray-700 text-center">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-zinc-400  h-0.5 w-100%"></div>
    </>
  );
}

export default Categories;
