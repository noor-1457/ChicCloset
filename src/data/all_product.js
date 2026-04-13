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
import p33_img from "../assets/Girls Party Frock.jpeg";
import p34_img from "../assets/bagpack.jpeg";
import p35_img from "../assets/sweatpants.jpeg";
import p36_img from "../assets/Boys Orange Colourblocked Hooded Sweatshirt.jpeg";

const all_product = [
  {
    id: 1,
    name: "Men's Casual T-Shirt",
    category: "Men",
    image: p1_img,
    new_price: 1200,
    old_price: 1500,
  },
  {
    id: 2,
    name: "Denim Jeans",
    category: "Men",
    image: p2_img,
    new_price: 2500,
    old_price: 3000,
  },
  {
    id: 3,
    name: "Summer Dress",
    category: "Women",
    image: p3_img,
    new_price: 3500,
    old_price: 4000,
  },
  {
    id: 4,
    name: "Formal Shirt",
    category: "Men",
    image: p4_img,
    new_price: 2200,
    old_price: 2700,
  },
  {
    id: 5,
    name: "Hoodie",
    category: "Women",
    image: p5_img,
    new_price: 2800,
    old_price: 3300,
  },
  {
    id: 6,
    name: "Embroidered Kurta",
    category: "Men",
    image: p6_img,
    new_price: 3200,
    old_price: 3800,
  },
  {
    id: 7,
    name: "Kids Frock",
    category: "Kids",
    image: p7_img,
    new_price: 1800,
    old_price: 2200,
  },
  {
    id: 8,
    name: "Sneakers",
    category: "Women",
    image: p8_img,
    new_price: 4000,
    old_price: 4700,
  },
  {
    id: 9,
    name: "Leather Jacket",
    category: "Men",
    image: p9_img,
    new_price: 7500,
    old_price: 9000,
  },
  {
    id: 10,
    name: "Maxi Dress",
    category: "Women",
    image: p10_img,
    new_price: 4800,
    old_price: 5500,
  },
  {
    id: 11,
    name: "Polo Shirt",
    category: "Men",
    image: p11_img,
    new_price: 2000,
    old_price: 2500,
  },
  {
    id: 12,
    name: "Office Pants",
    category: "Men",
    image: p12_img,
    new_price: 3200,
    old_price: 3700,
  },
  {
    id: 13,
    name: "Abaya",
    category: "Women",
    image: p13_img,
    new_price: 5500,
    old_price: 6200,
  },
  {
    id: 14,
    name: "Kids T-Shirt",
    category: "Kids",
    image: p14_img,
    new_price: 1200,
    old_price: 1600,
  },
  {
    id: 15,
    name: "Sports Shoes",
    category: "Women",
    image: p15_img,
    new_price: 4200,
    old_price: 4800,
  },
  {
    id: 16,
    name: "Handbag",
    category: "Women",
    image: p16_img,
    new_price: 3500,
    old_price: 4000,
  },
  {
    id: 17,
    name: "Track Pants",
    category: "Men",
    image: p17_img,
    new_price: 2100,
    old_price: 2500,
  },
  {
    id: 18,
    name: "Evening Gown",
    category: "Women",
    image: p18_img,
    new_price: 8000,
    old_price: 9500,
  },
  {
    id: 19,
    name: "Boys Hooded Sweatshirt",
    category: "Kids",
    image: p19_img,
    new_price: 2500,
    old_price: 3000,
  },
  {
    id: 20,
    name: "Sandals",
    category: "Women",
    image: p20_img,
    new_price: 1800,
    old_price: 2200,
  },
  {
    id: 21,
    name: "Kurti",
    category: "Women",
    image: p21_img,
    new_price: 2800,
    old_price: 3200,
  },
  {
    id: 22,
    name: "Cap",
    category: "Women",
    image: p22_img,
    new_price: 800,
    old_price: 1200,
  },
  {
    id: 23,
    name: "Jeans Jacket",
    category: "Men",
    image: p23_img,
    new_price: 5000,
    old_price: 6000,
  },
  {
    id: 24,
    name: "Party Dress",
    category: "Women",
    image: p24_img,
    new_price: 6200,
    old_price: 7000,
  },
  {
    id: 25,
    name: "Chinos",
    category: "Men",
    image: p25_img,
    new_price: 2300,
    old_price: 2700,
  },
  {
    id: 26,
    name: "Floral Skirt",
    category: "Women",
    image: p26_img,
    new_price: 3000,
    old_price: 3500,
  },
  {
    id: 27,
    name: "Kids Shorts",
    category: "Kids",
    image: p27_img,
    new_price: 1000,
    old_price: 1300,
  },
  {
    id: 28,
    name: "Wrist Watch",
    category: "Women",
    image: p28_img,
    new_price: 5500,
    old_price: 6500,
  },
  {
    id: 29,
    name: "Sports Tracksuit",
    category: "Men",
    image: p29_img,
    new_price: 4500,
    old_price: 5200,
  },
  {
    id: 30,
    name: "Ladies Heels",
    category: "Women",
    image: p30_img,
    new_price: 3000,
    old_price: 3500,
  },
  {
    id: 31,
    name: "Printed Saree",
    category: "Women",
    image: p31_img,
    new_price: 4200,
    old_price: 5000,
  },
  {
    id: 32,
    name: "Casual Shorts",
    category: "Men",
    image: p32_img,
    new_price: 1800,
    old_price: 2200,
  },
  {
    id: 33,
    name: "Girls Party Frock",
    category: "Kids",
    image: p33_img,
    new_price: 2700,
    old_price: 3200,
  },
  {
    id: 34,
    name: "Backpack",
    category: "Women",
    image: p34_img,
    new_price: 2200,
    old_price: 2700,
  },
  {
    id: 35,
    name: "Sweatpants",
    category: "Men",
    image: p35_img,
    new_price: 2600,
    old_price: 3100,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "Kids",
    image: p36_img,
    new_price: 2800,
    old_price: 3300,
  },
];

export default all_product;
