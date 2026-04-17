import p101 from "../assets/Wireless Bass Headphones.jpg";
import p102 from "../assets/Gaming Headphones RGB.jpg";
import p103 from "../assets/Bluetooth Headset.webp";
import p104 from "../assets/Noise Cancelling Headphones.jpg";
import p105 from "../assets/Wired Studio Headphones.jpg";
import p106 from "../assets/Foldable Travel Headphones.jpg";

import p201 from "../assets/Smart Watch Pro.jpg";
import p202 from "../assets/Classic Leather Watch.jpg";
import p203 from "../assets/Digital LED Watch.webp";
import p204 from "../assets/Sports Smart Watch.jpg";
import p205 from "../assets/Luxury Gold Watch.jpg";
import p206 from "../assets/Minimal Silver Watch.jpg";

import p301 from "../assets/DSLR Camera Pro.jpg";
import p302 from "../assets/Mirrorless Camera.jpg";
import p303 from "../assets/Vlogging Camera.webp";
import p304 from "../assets/Action Camera 4K.jpg";
import p305 from "../assets/Instant Print Camera.jpg";
import p306 from "../assets/Security CCTV Camera.jpg";

import p401 from "../assets/Gaming Mouse RGB.jpg";
import p402 from "../assets/Mechanical Gaming Keyboard.jpg";
import p403 from "../assets/Gaming Headset.jpg";
import p404 from "../assets/Gaming Chair Pro.jpg";
import p405 from "../assets/PlayStation Controller.jpg";
import p406 from "../assets/Gaming Laptop Stand.jpg";
import p407 from "../assets/RGB Gaming Desk.jpg";

const extra_products = [
  {
    id: 101,
    name: "Wireless Bass Headphones",
    category: "headphones",
    description: "High bass wireless headphones with noise cancellation.",
    image: p101,
    new_price: 4500,
    old_price: 5200,
  },
  {
    id: 102,
    name: "Gaming Headphones RGB",
    category: "headphones",
    description: "RGB gaming headphones with surround sound.",
    image: p102,
    new_price: 6000,
    old_price: 7000,
  },
  {
    id: 103,
    name: "Bluetooth Headset",
    category: "headphones",
    description: "Comfortable lightweight Bluetooth headset.",
    image: p103,
    new_price: 3200,
    old_price: 3800,
  },
  {
    id: 104,
    name: "Noise Cancelling Headphones",
    category: "headphones",
    description: "Premium ANC headphones for clear sound.",
    image: p104,
    new_price: 8500,
    old_price: 9500,
  },
  {
    id: 105,
    name: "Wired Studio Headphones",
    category: "headphones",
    description: "Professional studio quality wired headphones.",
    image: p105,
    new_price: 4000,
    old_price: 4800,
  },
  {
    id: 106,
    name: "Foldable Travel Headphones",
    category: "headphones",
    description: "Compact foldable headphones for travel use.",
    image: p106,
    new_price: 2800,
    old_price: 3500,
  },

  // ⌚ WATCHES (6)
  {
    id: 201,
    name: "Smart Watch Pro",
    category: "watch",
    description: "Advanced smart watch with fitness tracking.",
    image: p201,
    new_price: 7000,
    old_price: 8000,
  },
  {
    id: 202,
    name: "Classic Leather Watch",
    category: "watch",
    description: "Elegant leather strap classic watch.",
    image: p202,
    new_price: 5500,
    old_price: 6200,
  },
  {
    id: 203,
    name: "Digital LED Watch",
    category: "watch",
    description: "Modern LED display digital watch.",
    image: p203,
    new_price: 3000,
    old_price: 3500,
  },
  {
    id: 204,
    name: "Sports Smart Watch",
    category: "watch",
    description: "Waterproof sports smartwatch for fitness.",
    image: p204,
    new_price: 6500,
    old_price: 7500,
  },
  {
    id: 205,
    name: "Luxury Gold Watch",
    category: "watch",
    description: "Premium luxury gold plated watch.",
    image: p205,
    new_price: 12000,
    old_price: 14000,
  },
  {
    id: 206,
    name: "Minimal Silver Watch",
    category: "watch",
    description: "Simple and elegant silver watch design.",
    image: p206,
    new_price: 4800,
    old_price: 5500,
  },

  // 📷 CAMERAS (6)
  {
    id: 301,
    name: "DSLR Camera Pro",
    category: "camera",
    description: "Professional DSLR camera for photography.",
    image: p301,
    new_price: 55000,
    old_price: 60000,
  },
  {
    id: 302,
    name: "Mirrorless Camera",
    category: "camera",
    description: "Lightweight mirrorless camera with 4K support.",
    image: p302,
    new_price: 65000,
    old_price: 70000,
  },
  {
    id: 303,
    name: "Vlogging Camera",
    category: "camera",
    description: "Perfect camera for YouTube vloggers.",
    image: p303,
    new_price: 42000,
    old_price: 48000,
  },
  {
    id: 304,
    name: "Action Camera 4K",
    category: "camera",
    description: "Waterproof action camera for adventure shooting.",
    image: p304,
    new_price: 28000,
    old_price: 32000,
  },
  {
    id: 305,
    name: "Instant Print Camera",
    category: "camera",
    description: "Instant photo printing camera.",
    image: p305,
    new_price: 15000,
    old_price: 18000,
  },
  {
    id: 306,
    name: "Security CCTV Camera",
    category: "camera",
    description: "Home security HD CCTV camera.",
    image: p306,
    new_price: 9000,
    old_price: 11000,
  },

  // 🎮 GAMING (7)
  {
    id: 401,
    name: "Gaming Mouse RGB",
    category: "gaming",
    description: "High precision RGB gaming mouse.",
    image: p401,
    new_price: 2500,
    old_price: 3000,
  },
  {
    id: 402,
    name: "Mechanical Gaming Keyboard",
    category: "gaming",
    description: "RGB mechanical keyboard for pro gamers.",
    image: p402,
    new_price: 4500,
    old_price: 5200,
  },
  {
    id: 403,
    name: "Gaming Headset",
    category: "gaming",
    description: "Surround sound gaming headset.",
    image: p403,
    new_price: 3800,
    old_price: 4500,
  },
  {
    id: 404,
    name: "Gaming Chair Pro",
    category: "gaming",
    description: "Comfortable ergonomic gaming chair.",
    image: p404,
    new_price: 18000,
    old_price: 20000,
  },
  {
    id: 405,
    name: "PlayStation Controller",
    category: "gaming",
    description: "Wireless controller for gaming consoles.",
    image: p405,
    new_price: 6000,
    old_price: 7000,
  },
  {
    id: 406,
    name: "Gaming Laptop Stand",
    category: "gaming",
    description: "Cooling stand for gaming laptops.",
    image: p406,
    new_price: 2200,
    old_price: 2800,
  },
  {
    id: 407,
    name: "RGB Gaming Desk",
    category: "gaming",
    description: "Large RGB gaming desk setup.",
    image: p407,
    new_price: 15000,
    old_price: 17000,
  },
];

export default extra_products;
