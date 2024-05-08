// AddToCartButton.js

import { useState } from 'react';

const AddToCartButton = ({id , name , price , quan}) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Retrieve cart data from session storage or initialize an empty array if it doesn't exist
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      cart[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      cart.push({
        id: id,
        name: name,
        price: price,
        quantity: quantity
      });
    }

    // Update session storage with the updated cart data
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, provide feedback to the user (e.g., toast message)
    alert('Product added to cart!');
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        min="1"
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;
