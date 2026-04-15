import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Wishlist = () => {
  const { allProducts, wishlistItems, removeFromWishlist, addToCart } =
    useContext(ShopContext);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">❤️ My Wishlist</h1>

      <div className="grid grid-cols-4 gap-6">
        {allProducts.map((item) => {
          if (wishlistItems[item.id] > 0) {
            return (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow hover:scale-105 transition"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover"
                />

                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>

                <p className="text-red-500 font-bold">Rs. {item.new_price}</p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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
