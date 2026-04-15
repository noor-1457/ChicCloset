import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Buy from "../pages/Buy";

const ProductCard = () => {
  const { id } = useParams();
  const { allProducts, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const product = allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="p-10 grid grid-cols-2 gap-10">
      {/* Image */}
      <div className="bg-gray-100 p-6 rounded-xl flex justify-center">
        <img src={product.image} alt="" className="h-80 object-contain" />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

        <p className="text-gray-500 mb-2">Category: {product.category}</p>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-red-500">
            ${product.new_price}
          </span>
          <span className="line-through text-gray-400">
            ${product.old_price}
          </span>
        </div>

        <p className="text-gray-600 mb-6">
          This is a premium quality product with amazing features.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => addToCart(product.id)}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Add to Cart
          </button>

          <button
            onClick={() => {
              navigate(`/buy/${product.id}`);
            }}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
