import React, { useState } from "react";

function PlantCard({ name, image, price, inStock: initialInStock }) {
  const [inStock, setInStock] = useState(initialInStock);

  // Handle stock toggle
  const handleStockToggle = () => {
    setInStock((prevInStock) => !prevInStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price.toFixed(2)}</p>
      <button
        className={inStock ? "primary" : ""}
        onClick={handleStockToggle}
      >
        {inStock ? "in Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;