import "./App.css";
import React from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FlashSales from "./components/FlashSales.jsx";
import Categories from "./components/Categories.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import Products from "./components/Products.jsx";
import Featured from "./components/Featured.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlashSales />
      <Categories />
      <NewArrivals />
      <Products />
      <Featured />

      {/* <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/sign-up" element={<h1>Sign Up</h1>} />
      </Routes> */}
    </div>
  );
}

export default App;
