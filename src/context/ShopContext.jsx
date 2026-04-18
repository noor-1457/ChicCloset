import React, { createContext, useState } from "react";
import all_product from "../data/all_product";
import new_collection from "../data/Newcoll-data";
import BestSellings from "../data/BestSellings";
import extra_products from "../data/ExtraProducts";

export const ShopContext = createContext(null);

const allProducts = [
  ...all_product,
  ...new_collection,
  ...BestSellings,
  ...extra_products,
]; // ✅ merge

// default cart
const getDefaultCart = () => {
  let cart = {};
  allProducts.forEach((item) => {
    cart[item.id] = 0; // ✅ ID based
  });
  return cart;
};

const getDefaultWishlist = () => {
  let wishlist = {};
  allProducts.forEach((item) => {
    wishlist[item.id] = 0; // ✅ ID based
  });
  return wishlist;
};

const ShopContextProvider = (props) => {
  // 🛒 Cart state
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // ❤️ Wishlist state (SEPARATE)
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

  // ---------------- CART ----------------

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };
  const remFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0), // ✅ no negative
    }));
  };

  const getTotalAmt = () => {
    let total = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allProducts.find((p) => p.id === Number(item));

        if (itemInfo) {
          total += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return total;
  };

  const getTotalcartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  // ---------------- WISHLIST ----------------

  const addToWishlist = (itemId) => {
    setWishlistItems((prev) => ({
      ...prev,
      [itemId]: 1, // wishlist me sirf 1 item hota hai
    }));
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const getTotalWishlistItems = () => {
    let total = 0;
    for (const item in wishlistItems) {
      total += wishlistItems[item];
    }
    return total;
  };
  const [search, setSearch] = useState("");

  // ---------------- CONTEXT ----------------

  const ContextValue = {
    allProducts,
    search,
    setSearch,

    // cart
    cartItems,
    addToCart,
    remFromCart,
    getTotalAmt,
    getTotalcartItems,

    // wishlist
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    getTotalWishlistItems,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
