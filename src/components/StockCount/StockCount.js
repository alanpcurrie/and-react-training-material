import React, { useState } from "react";

export const StockCount = (props) => {
  const [quantity, setQuantity] = useState(0);

  const incrementCount = () => setQuantity((currentValue) => currentValue + 1);
  const decrementCount = () =>
    setQuantity((currentValue) =>
      currentValue > 0 ? currentValue - 1 : (currentValue = 0)
    );

  return (
    <div>
      <h3>Quantity: {quantity === 0 ? "out of stock" : quantity}</h3>

      <div className="buttonContainer">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};

export default StockCount;
