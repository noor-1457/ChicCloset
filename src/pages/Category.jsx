import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Card from "../components/Card";

function Category() {
  const { name } = useParams();
  const { allProducts } = useContext(ShopContext);

  const filteredProducts = allProducts.filter(
    (item) => item.category.toLowerCase() === name,
  );

  return (
    <div className="grid grid-cols-4 gap-6 p-10">
      {filteredProducts.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          category={item.category}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  );
}

export default Category;
