import React from "react";
import Card from "./Card";
import BestSelling from "../data/BestSellings";
import { motion } from "framer-motion";

function BestSellings() {
  return (
    <>
      <div className=" container mx-auto px-4 py-8 items-center justify-center">
        <div id="Heading" className="flex items-center gap-2">
          <div className="bg-red-400 h-5 w-10  rounded"></div>
          <div className="text-red-400">This Month</div>
        </div>
        <h1 className="text-2xl font-bold mt-2">Best Selling Products</h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {BestSelling.map((product) => (
            <Card {...product} />
          ))}
        </div>
      </div>
      <div className="bg-zinc-400  h-0.5 w-100%"></div>
    </>
  );
}

export default BestSellings;
