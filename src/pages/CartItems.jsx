import React, { useContext } from "react";
import remove_icon from "../Assets/delete.png";
import { ShopContext } from "../context/ShopContext";

export const CartItems = () => {
  const { getTotalAmt, allProducts, cartItems, remFromCart } =
    useContext(ShopContext);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="grid grid-cols-6 font-semibold text-gray-600 border-b pb-2">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Items */}
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div
              key={e.id}
              className="grid grid-cols-6 items-center gap-2 py-4 border-b"
            >
              <img src={e.image} alt="" className="w-16 h-16 object-contain" />

              <p className="text-sm">{e.name}</p>

              <p className="text-gray-600">${e.new_price}</p>

              <button className="bg-gray-200 px-3 py-1 rounded">
                {cartItems[e.id]}
              </button>

              <p className="font-semibold text-red-500">
                ${e.new_price * cartItems[e.id]}
              </p>

              <img
                src={remove_icon}
                alt=""
                className="w-6 cursor-pointer hover:scale-110 transition"
                onClick={() => remFromCart(e.id)}
              />
            </div>
          );
        }
        return null;
      })}

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-10">
        {/* Total */}
        <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
          <h1 className="text-xl font-bold mb-4">Cart Totals</h1>

          <div className="flex justify-between py-2 border-b">
            <p>Subtotal</p>
            <p>${getTotalAmt()}</p>
          </div>

          <div className="flex justify-between py-2 border-b">
            <p>Shipping</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between py-3 font-bold text-lg">
            <p>Total</p>
            <p>${getTotalAmt()}</p>
          </div>

          <button className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo */}
        <div className="bg-gray-100 p-6 rounded-lg w-full md:w-1/2">
          <p className="mb-3 text-gray-600">
            If you have a promo code, enter it here
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 border px-3 py-2 rounded"
            />
            <button className="bg-black text-white px-4 rounded hover:bg-gray-800">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
