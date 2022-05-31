import React from "react";
import Card from "./Card/Card";

const CardGroup = () => {
  const products = [
    { id: 232, name: "laptop", price: 1250000 },
    { id: 233, name: "Smart Watch", price: 130000 },
    { id: 237, name: "mobile", price: 250000 },
    { id: 280, name: "Camera", price: 1050000 },
  ];
  return (
    <div>
      <h2>This is my cards</h2>
      <div className="card-group">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
