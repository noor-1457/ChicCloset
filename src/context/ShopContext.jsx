import React, { createContext, useState } from "react";
import all_product from "../data/all_product";

export const ShopContext = createContext(null);

// default cart
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

// ✅ COMPONENT BANAYA
const ShopContextProvider = (props) => {
  // ✅ Hook inside component
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // remove
  const remFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  // total amount
  const getTotalAmt = () => {
    let totalAmt = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item),
        );

        if (itemInfo) {
          totalAmt += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmt;
  };

  // total items
  const getTotalcartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }

    return totalItems;
  };

  const ContextValue = {
    getTotalcartItems,
    getTotalAmt,
    all_product,
    cartItems,
    setCartItems,
    addToCart,
    remFromCart,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
