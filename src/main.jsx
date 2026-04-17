import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";
// import { div } from "framer-motion/client

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="overflow-hidden">
    <ShopContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </div>,
);
