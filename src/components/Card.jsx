import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { ShopContext } from "../context/ShopContext"; // ✅ correct import

function Card(props) {
  const { addToCart, addToWishlist } = useContext(ShopContext); // ✅ works now
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className=" bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300  group cursor-pointer"
    >
      {/* Image */}
      <div className="relative bg-gray-100 p-4 flex items-center justify-center">
        <Link to={`/product/${props.id}`}>
          <img
            src={props.image}
            alt="Product"
            className=" h-32 sm:h-40 md:h-48 object-contain"
          />
        </Link>

        {/* Heart  Add to wishlist*/}
        <button
          onClick={() => addToWishlist(props.id)}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow hover:bg-red-400 hover:scale-110 transition-all duration-300"
        >
          <Heart className="w-5 h-5 text-gray-600 hover:not-focus:indigo-700 " />
        </button>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(props.id)} // ✅ fixed
          className="absolute top-14 right-3 bg-white/90 p-2 rounded-full shadow hover:bg-red-400 hover:scale-110 transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-2 text-center">
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

      <button
        onClick={() => {
          navigate(`/product/${props.id}`);
        }}
        className="bg-red-400 text-white py-2 px-4 my-3 mx-auto block rounded hover:bg-red-500 hover:scale-110 transition-all duration-300"
      >
        Buy Now
      </button>
    </motion.div>
  );
}

export default Card;
