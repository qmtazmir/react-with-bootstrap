import React from "react";
import { CardGroup } from "react-bootstrap";
import Card2 from "../Card2/Card2";

const CardGroup2 = () => {
  const products = [
    { id: 232, name: "laptop", price: 1250000 },
    { id: 233, name: "Smart Watch", price: 130000 },
    { id: 237, name: "mobile", price: 250000 },
    { id: 280, name: "Camera", price: 1050000 },
  ];
  return (
    <div>
      <CardGroup>
        {products.map((product) => (
          <Card2 key={product.id} product={product}></Card2>
        ))}
      </CardGroup>
    </div>
  );
};

export default CardGroup2;
