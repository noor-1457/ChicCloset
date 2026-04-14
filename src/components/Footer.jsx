import React from "react";
import { StepForward } from "lucide-react";
import qr from "../assets/qrcode.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white mt-20 px-6 py-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* 1 */}
        <div>
          <h1 className="text-xl font-semibold mb-2">Exclusive</h1>
          <h2 className="mb-2">Subscribe</h2>
          <p className="text-sm mb-3">Get 10% off on your first order</p>

          {/* Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full bg-zinc-800 text-gray-300 placeholder:text-gray-500 
              border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-400 
              h-10 rounded-md pl-3 pr-10"
            />
            <StepForward
              className="absolute top-2.5 right-3 cursor-pointer"
              size={18}
            />
          </div>
        </div>

        {/* 2 */}
        <div>
          <h1 className="font-semibold mb-2">Support</h1>
          <p className="text-sm">123, Lahore, Pakistan</p>
          <p className="text-sm">ChicCloset@gmail.com</p>
          <p className="text-sm">0123456789</p>
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold mb-2">Account</h1>
          <a href="#" className="hover:text-red-400 text-sm">
            My Account
          </a>
          <a href="#" className="hover:text-red-400 text-sm">
            Login / Register
          </a>
          <a href="#" className="hover:text-red-400 text-sm">
            Cart
          </a>
          <a href="#" className="hover:text-red-400 text-sm">
            Wishlist
          </a>
          <a href="#" className="hover:text-red-400 text-sm">
            Shop
          </a>
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold mb-2">Quick Links</h1>
          <a href="#" className="hover:text-red-400 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-400 text-sm">
            Terms of Use
          </a>
          <a href="#" className="hover:text-red-400 text-sm">
            FAQ
          </a>
          <a href="#" className="hover:text-red-400 text-sm">
            Contact
          </a>
        </div>

        {/* 5 */}
        <div>
          <h1 className="font-semibold mb-2">Download App</h1>
          <p className="text-sm mb-3">Save $3 with App (New User Only)</p>

          <div className="bg-white h-16 w-16 p-1 mb-4">
            <img
              src={qr}
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-red-400" />
            <FaInstagram className="cursor-pointer hover:text-red-400" />
            <FaTwitter className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © 2026 Exclusive. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
