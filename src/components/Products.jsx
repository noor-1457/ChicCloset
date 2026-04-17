import React, { useState } from "react";
import Card from "./Card";
import new_collection from "../data/all_product.js";
import { motion } from "framer-motion";

function Products() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <div className="bg-red-400 h-5 w-10 rounded"></div>
          <div className="text-red-400">Our Products</div>
        </div>

        <h1 className="text-2xl font-bold mt-2">Explore Our Products</h1>

        {/* Products Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6${
            showAll ? "" : "max-h-96 overflow-hidden"
          }`}
        >
          {new_collection.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-500 transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
