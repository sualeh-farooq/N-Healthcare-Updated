import { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const [dc, setDc] = useState(200);
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    number: '',
    city: '',
    address: '',
    delivery_charges: ''
  });

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
    let grandTotal = total + dc;
    return isNaN(total) ? 0 : grandTotal;
  };

  const productTotal = () => {
    let productTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return isNaN(productTotal) ? 0 : productTotal;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    if (name === 'city') {
      let newDc;
      if (value === 'Karachi') {
        newDc = 200;
      } else if (value === 'Lahore') {
        newDc = 500;
      } else if (value === 'Multan') {
        newDc = 600;
      }
      updatedFormData = { ...updatedFormData, delivery_charges: newDc };
      setDc(newDc);
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer: formData,
        cart: JSON.parse(sessionStorage.getItem('cart')) || [],
      }),
    });
    if (response.ok) {
      const orderData = await response.json();
      console.log('Order placed successfully:', orderData);
    } else {
      console.error('Failed to place order');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="f_name" className="form-label">First Name:</label>
            <input type="text" className="form-control" id="f_name" name="f_name" value={formData.f_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="l_name" className="form-label">Last Name:</label>
            <input type="text" className="form-control" id="l_name" name="l_name" value={formData.l_name} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="number" className="form-label">Phone:</label>
            <input type="number" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="form-label">City:</label>
            <select className="form-select" id="city" name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select City</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Multan">Multan</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
      <h2 className="mt-4">Total: ${productTotal()}</h2>
      <h3>Delivery Charges: <b>${dc}</b></h3>
      <h2 className="mb-5">Grand Total: ${calculateTotal()}</h2>
    </div>
  );
};

export default CheckoutPage;
