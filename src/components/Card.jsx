import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function Card(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className="w-[260px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative bg-gray-100 p-4 flex items-center justify-center">
        <Link to={`/product/${props.id}`}>
          <img
            src={props.image}
            alt="Product"
            className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Heart */}
        <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:bg-red-400 hover:scale-110 transition-all duration-300">
          <Heart className="w-5 h-5 text-gray-600 hover:text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h2 className="font-semibold text-gray-800 text-sm line-clamp-2">
          {props.name}
        </h2>

        <p className="text-xs text-gray-500 mt-1">{props.category}</p>

        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-lg font-bold text-red-500">
            ${props.new_price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${props.old_price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
