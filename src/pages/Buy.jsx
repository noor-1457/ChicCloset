import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

function Buy() {
  const { allProducts } = useContext(ShopContext);
  const { id } = useParams();

  const product = allProducts.find((item) => {
    return String(item.id) === String(id);
  });
  console.log("URL ID:", id);
  console.log("Products:", allProducts);
  // 👇 form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill all details 😄");
      return;
    }

    alert(
      `🎉 Order Placed!\n\nProduct: ${product.name}\nTotal: Rs ${product.new_price}\n\nThank you ${formData.name}!`,
    );

    // yahan API / Firebase order save kar sakti ho
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 mt-10">
      {/* LEFT: Product Info */}
      <div className="bg-white shadow rounded-xl p-6">
        <img
          src={product.image}
          alt=""
          className="h-64 mx-auto object-contain"
        />

        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

        <p className="text-gray-500">{product.category}</p>

        <div className="mt-4 flex justify-between border-t pt-3">
          <span>Price</span>
          <span className="font-bold text-red-500">Rs {product.new_price}</span>
        </div>
      </div>

      {/* RIGHT: Checkout Form */}
      <div className="bg-gray-100 shadow rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Checkout Details</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* Summary */}
        <div className="bg-white p-3 rounded mb-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>Rs {product.new_price}</p>
          </div>

          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between font-bold mt-2 border-t pt-2">
            <p>Total</p>
            <p>Rs {product.new_price}</p>
          </div>
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrder}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          PLACE ORDER (COD)
        </button>
      </div>
    </div>
  );
}

export default Buy;
