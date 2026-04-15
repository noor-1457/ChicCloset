import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { CartItems } from "./pages/CartItems.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Buy from "./pages/Buy.jsx";
import Category from "./pages/Category.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/product/:id" element={<ProductCard />} />
          <Route path="/buy/:id" element={<Buy />} />
          <Route path="/category/:name" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
