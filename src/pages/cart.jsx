// // pages/cart.js

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// const CartPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const cartData = JSON.parse(sessionStorage.getItem('cart')) || [];
//     setCart(cartData);
//   }, []);

//   const updateQuantity = (productId, newQuantity) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === productId) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//     sessionStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const removeProduct = (productId) => {
//     const updatedCart = cart.filter(item => item.id !== productId);
//     setCart(updatedCart);
//     sessionStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const calculateTotal = () => {
//     let total = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
//     if (total === NaN) {
//       return 0
//     } else {
//       return total
//     }

//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       {cart.map(product =>
//       (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//           <input
//             type="number"
//             value={product.quantity}
//             onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
//             min="1"
//           />
//           <p>Product Total : ${product.price * product.quantity}</p>
//           <button onClick={() => removeProduct(product.id)}>Remove</button>
//         </div>
//       ))}
//       <h2>Total: ${calculateTotal()}</h2>

//       <Link href="/checkout" >Procced to checkout</Link>
//     </div>

//   );
// };

// export default CartPage;


import { useEffect, useState } from 'react';
import Link from 'next/link';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCart(cartData);
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeProduct = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    let total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return isNaN(total) ? 0 : total;
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      {cart.map(product => (
        <div key={product.id} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">Price: ${product.price}</p>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
              min="1"
              className="form-control mb-2"
            />
            <p className="card-text">Product Total: ${product.price * product.quantity}</p>
            <button onClick={() => removeProduct(product.id)} className="btn btn-danger me-2">Remove</button>
          </div>
        </div>
      ))}
      <div className='my-3 d-flex align-items-center justify-content-between' >
        <Link style={{width: 'max-content'}} className='contact-btn rounded-0' href="/products" >Continue Shopping</Link>
      <h3 className="text-end">Total: ${calculateTotal()}</h3>

      </div>
      <div className="d-grid gap-2">
        <Link className='contact-btn rounded-0 d-flex justify-content-center' href="/checkout">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
