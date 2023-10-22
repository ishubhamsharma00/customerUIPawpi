import React, { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center  ">
      <button
        className="bg-white text-black px-2 py-1 rounded-l-md border-2 font-extrabold"
        onClick={decrementQuantity}
      >
        -
      </button>
      <input
        type="number"
        min="1"
        step="1"
        value={quantity}
        className="w-16 text-center items-center py-1 justify-center border-2 font-extrabold text-[#A4A3A6]  bg-white "
      />
      <button
        className="bg-white text-black px-2 py-1 rounded-r-md border-2 font-extrabold"
        onClick={incrementQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
