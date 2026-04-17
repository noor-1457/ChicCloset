import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Wishlist = () => {
  const { allProducts, wishlistItems, removeFromWishlist, addToCart } =
    useContext(ShopContext);

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        ❤️ My Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((item) => {
          if (wishlistItems[item.id] > 0) {
            return (
              <div
                key={item.id}
                className="border p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition duration-300 bg-white"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-40 sm:h-44 md:h-48 object-cover rounded"
                />

                {/* Content */}
                <h2 className="text-base sm:text-lg font-semibold mt-2 line-clamp-2">
                  {item.name}
                </h2>

                <p className="text-red-500 font-bold mt-1">
                  Rs. {item.new_price}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-sm"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Wishlist;
