import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";
import { ToastContainer } from "react-toastify";
// import { div } from "framer-motion/client

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="overflow-x-hidden">
    <ShopContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </ShopContextProvider>
  </div>,
);
