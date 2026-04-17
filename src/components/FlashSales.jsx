import React from "react";
import Card from "./Card";
import all_product from "../data/Newcoll-data";
import { motion } from "framer-motion";

function FlashSales() {
  return (
    <>
      <div className=" container mx-auto px-4 py-8 items-center justify-center">
        <div id="Heading" className="flex items-center gap-2">
          <div className="bg-red-400 h-5 w-10  rounded"></div>
          <div className="text-red-400">Today's</div>
        </div>
        <h1 className="text-2xl font-bold mt-2">Flash Sales</h1>

        <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {all_product.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          ))}
        </div>
      </div>
      <motion.div className="flex  justify-center items-center place-items-center">
        <button className="bg-red-400 text-white py-2 px-4 my-8 mx-auto rounded hover:bg-red-500 hover:scale-110 transition-all duration-300">
          View All Products
        </button>
      </motion.div>
      <div className="bg-zinc-400  h-0.5 w-100%"></div>
    </>
  );
}

export default FlashSales;
