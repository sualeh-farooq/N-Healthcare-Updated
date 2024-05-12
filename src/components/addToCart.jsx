// AddToCartButton.js

import { useState } from 'react';
import { toast , ToastContainer } from "react-toastify";

const AddToCartButton = ({id , name , price , quan}) => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const addToCart = () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({
        id: id,
        name: name,
        price: price,
        quantity: quantity
      });
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));

    // alert('Product added to cart!');
    toast.success("Product Added to Cart", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className='d-flex w-100 ' >
      <div className="quantity-container ">
        <button className="quantity-btn" onClick={decrement}>-</button>
        <input
          type="number"
          value={quantity}
          min="1"
          className='quantity_inp'
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button style={{cursor: 'pointer'}} className="quantity-btn" onClick={increment}>+</button>
      </div>
      <button style={{cursor: 'pointer'}} className='contact-btn rounded-0' onClick={addToCart}>Add to Cart</button>

      <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="colored"
              />
    </div>

  );
};

export default AddToCartButton;
