import React from "react";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales.jsx";
import Categories from "../components/Categories.jsx";
import NewArrivals from "../components/NewArrivals.jsx";
import Products from "../components/Products.jsx";
import Featured from "../components/Featured.jsx";

function Home() {
  return (
    <>
      <Hero />
      <FlashSales />
      <Categories />
      <NewArrivals />
      <Products />
      <Featured />
    </>
  );
}

export default Home;
