// Importing product images
import p1_img from "../assets/men-casual-tshirt.jpg";
import p2_img from "../assets/denim-jeans.jpg";
import p3_img from "../assets/summer-dress.webp";
import p4_img from "../assets/formal-shirts-1000x1000.jpg";
import p5_img from "../assets/hoodie.webp";
import p6_img from "../assets/emb-kurta.jpeg";
import p7_img from "../assets/kids-frock.jpeg";
import p8_img from "../assets/sneaker-women.jpeg";
import p9_img from "../assets/leather-jacket.jpeg";
import p10_img from "../assets/maxi-dress.webp";
import p11_img from "../assets/polo-shirt.webp";
import p12_img from "../assets/office-pants.webp";
import p13_img from "../assets/abaya.jpeg";
import p14_img from "../assets/kids-t-shirt.jpeg";
import p15_img from "../assets/sport-shoes.jpeg";
import p16_img from "../assets/hand-bag.jpeg";
import p17_img from "../assets/track-pants.jpeg";
import p18_img from "../assets/evening gown.jpeg";
import p19_img from "../assets/boye-sweatshirt.jpeg";
import p20_img from "../assets/sandals.jpeg";
import p21_img from "../assets/kurti.jpeg";
import p22_img from "../assets/cap.jpeg";
import p23_img from "../assets/jeans jacket.jpeg";
import p24_img from "../assets/party dress.jpeg";
import p25_img from "../assets/chinos.jpg";
import p26_img from "../assets/floral skirt.jpeg";
import p27_img from "../assets/shorts.jpg";
import p28_img from "../assets/watch.jpeg";
import p29_img from "../assets/track-pants.jpeg";
import p30_img from "../assets/heels.jpeg";
import p31_img from "../assets/saree.jpeg";
import p32_img from "../assets/casual shorts.jpeg";

const all_product = [
  {
    id: 1,
    name: "Men's Casual T-Shirt",
    category: "men",
    description: "Soft cotton casual t-shirt for everyday comfortable wear.",
    image: p1_img,
    new_price: 1200,
    old_price: 1500,
  },
  {
    id: 2,
    name: "Denim Jeans",
    category: "men",
    description: "Classic slim-fit denim jeans with durable stretch fabric.",
    image: p2_img,
    new_price: 2500,
    old_price: 3000,
  },
  {
    id: 3,
    name: "Summer Dress",
    category: "women",
    description: "Lightweight and stylish summer dress for daily wear.",
    image: p3_img,
    new_price: 3500,
    old_price: 4000,
  },
  {
    id: 4,
    name: "Formal Shirt",
    category: "men",
    description: "Elegant formal shirt suitable for office and meetings.",
    image: p4_img,
    new_price: 2200,
    old_price: 2700,
  },
  {
    id: 5,
    name: "Hoodie",
    category: "women",
    description: "Warm and cozy hoodie perfect for winter season.",
    image: p5_img,
    new_price: 2800,
    old_price: 3300,
  },
  {
    id: 6,
    name: "Embroidered Kurta",
    category: "men",
    description: "Traditional embroidered kurta with premium fabric finish.",
    image: p6_img,
    new_price: 3200,
    old_price: 3800,
  },
  {
    id: 7,
    name: "Kids Frock",
    category: "kids",
    description: "Cute and comfortable frock for kids daily use.",
    image: p7_img,
    new_price: 1800,
    old_price: 2200,
  },
  {
    id: 8,
    name: "Sneakers",
    category: "shoes",
    description: "Trendy sneakers designed for comfort and daily wear.",
    image: p8_img,
    new_price: 4000,
    old_price: 4700,
  },
  {
    id: 9,
    name: "Leather Jacket",
    category: "men",
    description: "Premium leather jacket for a bold and stylish look.",
    image: p9_img,
    new_price: 7500,
    old_price: 9000,
  },
  {
    id: 10,
    name: "Maxi Dress",
    category: "women",
    description: "Elegant maxi dress perfect for parties and events.",
    image: p10_img,
    new_price: 4800,
    old_price: 5500,
  },
  {
    id: 11,
    name: "Polo Shirt",
    category: "men",
    description: "Smart polo shirt suitable for casual and semi-formal wear.",
    image: p11_img,
    new_price: 2000,
    old_price: 2500,
  },
  {
    id: 12,
    name: "Office Pants",
    category: "men",
    description: "Comfortable office trousers with perfect formal fit.",
    image: p12_img,
    new_price: 3200,
    old_price: 3700,
  },
  {
    id: 13,
    name: "Abaya",
    category: "women",
    description: "Elegant abaya designed for modest fashion style.",
    image: p13_img,
    new_price: 5500,
    old_price: 6200,
  },
  {
    id: 14,
    name: "Kids T-Shirt",
    category: "kids",
    description: "Soft cotton t-shirt for kids daily comfort.",
    image: p14_img,
    new_price: 1200,
    old_price: 1600,
  },
  {
    id: 15,
    name: "Sports Shoes",
    category: "shoes",
    description: "High-performance sports shoes for running and training.",
    image: p15_img,
    new_price: 4200,
    old_price: 4800,
  },
  {
    id: 16,
    name: "Handbag",
    category: "accessories",
    description: "Stylish handbag perfect for daily use and outings.",
    image: p16_img,
    new_price: 3500,
    old_price: 4000,
  },
  {
    id: 17,
    name: "Track Pants",
    category: "men",
    description: "Comfortable track pants ideal for gym and sports.",
    image: p17_img,
    new_price: 2100,
    old_price: 2500,
  },
  {
    id: 18,
    name: "Evening Gown",
    category: "women",
    description: "Luxury evening gown for special occasions and events.",
    image: p18_img,
    new_price: 8000,
    old_price: 9500,
  },
  {
    id: 19,
    name: "Boys Hooded Sweatshirt",
    category: "kids",
    description: "Warm hoodie sweatshirt for kids winter comfort.",
    image: p19_img,
    new_price: 2500,
    old_price: 3000,
  },
  {
    id: 20,
    name: "Sandals",
    category: "shoes",
    description: "Comfortable sandals for daily casual wear.",
    image: p20_img,
    new_price: 1800,
    old_price: 2200,
  },
  {
    id: 21,
    name: "Kurti",
    category: "women",
    description: "Stylish kurti with traditional elegant design.",
    image: p21_img,
    new_price: 2800,
    old_price: 3200,
  },
  {
    id: 22,
    name: "Cap",
    category: "accessories",
    description: "Trendy cap for casual streetwear style.",
    image: p22_img,
    new_price: 800,
    old_price: 1200,
  },
  {
    id: 23,
    name: "Jeans Jacket",
    category: "men",
    description: "Classic denim jacket for a stylish casual look.",
    image: p23_img,
    new_price: 5000,
    old_price: 6000,
  },
  {
    id: 24,
    name: "Party Dress",
    category: "women",
    description: "Beautiful party dress designed for special occasions.",
    image: p24_img,
    new_price: 6200,
    old_price: 7000,
  },
  {
    id: 25,
    name: "Chinos",
    category: "men",
    description: "Comfortable chinos trousers for smart casual look.",
    image: p25_img,
    new_price: 2300,
    old_price: 2700,
  },
  {
    id: 26,
    name: "Floral Skirt",
    category: "women",
    description: "Stylish floral skirt for trendy fashion outfits.",
    image: p26_img,
    new_price: 3000,
    old_price: 3500,
  },
  {
    id: 27,
    name: "Kids Shorts",
    category: "kids",
    description: "Comfortable shorts for kids daily summer wear.",
    image: p27_img,
    new_price: 1000,
    old_price: 1300,
  },
  {
    id: 28,
    name: "Wrist Watch",
    category: "watch",
    description: "Elegant wrist watch with premium design and finish.",
    image: p28_img,
    new_price: 5500,
    old_price: 6500,
  },
  {
    id: 29,
    name: "Sports Tracksuit",
    category: "men",
    description: "Comfortable tracksuit for sports and gym activities.",
    image: p29_img,
    new_price: 4500,
    old_price: 5200,
  },
  {
    id: 30,
    name: "Ladies Heels",
    category: "shoes",
    description: "Stylish high heels for parties and events.",
    image: p30_img,
    new_price: 3000,
    old_price: 3500,
  },
  {
    id: 31,
    name: "Printed Saree",
    category: "women",
    description: "Traditional printed saree with elegant design.",
    image: p31_img,
    new_price: 4200,
    old_price: 5000,
  },
  {
    id: 32,
    name: "Casual Shorts",
    category: "men",
    description: "Lightweight casual shorts for summer comfort.",
    image: p32_img,
    new_price: 1800,
    old_price: 2200,
  },
];

export default all_product;
