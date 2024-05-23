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
import SEO from "@/components/seo"
import Layout from "@/layout/layout"
import Wrapper from "@/layout/wrapper"
import { IoMdTrash } from "react-icons/io";



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

    <Wrapper>
    <Layout>
    <div className="container mt-5 pb-110 pt-170" >
<div className='d-flex justify-content-between align-items-center' >
<h3 className="text-left mb-4">Your Cart</h3>
      <Link style={{width: 'max-content'}} className='contact-btn rounded-0' href="/products" >Continue Shopping</Link>

</div>

      <div  className="card mb-3">
          <div className="card-body table-responsive">

          <table className='table' >
            <thead>
              <tr>
                  <th>Serial No</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((val , index)=>{
                  return (
                    <>
                    <tr>
                      <td> {index + 1} </td>
                      <td> {val.name} </td>
                      <td> Rs {val.price} </td>
                      <td> <div className='d-flex align-items-center gap-1 ' >
                      <input
              type="number"
              value={val.quantity}
              onChange={(e) => updateQuantity(val.id, parseInt(e.target.value))}
              min="1"
              style={{width: 'max-content'}}
              className="form-control mb-2"
            /> <IoMdTrash style={{cursor: 'pointer'}} className='mb-2 cursor-pointer' size={30} onClick={() => removeProduct(val.id)} /></div></td>

            <td> Rs {val.price * val.quantity === NaN ? '0' : val.price * val.quantity} </td>
                    </tr>
                    </>
                  )
                })
              }
            </tbody>
            {/* <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th  > Total: Rs {calculateTotal()} </th>
              </tr>
            </tfoot> */}
            </table>

          </div>
        </div>
      {/* {cart.map(product => (
        <div key={product.id} className="card mb-3">
          <div className="card-body">

         
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">Price: ${product.price}</p>
           
            <p className="card-text">Product Total: ${product.price * product.quantity}</p>
            <button onClick={() => removeProduct(product.id)} className="btn btn-danger me-2">Remove</button>
          </div>
        </div>
      ))} */}
      <div className='my-3 w-100' >
      <p className="text-end fs-5 fw-semibold">Estimated Total : Rs {calculateTotal()}</p>
<div className="w-100 text-end" >
<small className='text-muted text-end' >Taxes, Discounts and shipping calculated at checkout</small>
</div>
      </div>
      <div className="d-grid gap-2">
       {cart.length > 0 ? (
        <>
         <Link  className='contact-btn rounded-0 d-flex justify-content-center' href="/checkout">
          Proceed to Checkout
        </Link>
        </>
       ) : null}
      </div>
    </div>
    </Layout>
    </Wrapper>
  );
};

export default CartPage;
