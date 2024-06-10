import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify";
import { Col, Row } from 'reactstrap';
import Layout from "@/layout/layout"
import Wrapper from "@/layout/wrapper"
import { useDispatch } from 'react-redux';
import { setFormDataRedux, setCartRedux, setTotal } from '../redux/DataFeature/checkoutSlice';

const CheckoutPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [dc, setDc] = useState(200);
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    number: '',
    city: '',
    address: '',
    delivery_charges: '',
    add2: ''
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
      if (productTotal() >= 10000 && value === 'Karachi') {
        newDc = 0;
      } else if (productTotal() < 10000 && value == 'Karachi') {
        newDc = 200;
      }

      else if (value === 'Lahore') {
        newDc = 500;
      } else if (value === 'Multan') {
        newDc = 600;
      }
      updatedFormData = { ...updatedFormData, delivery_charges: newDc };
      setDc(newDc);
    }

    setFormData(updatedFormData);
  };


  // const calculateTotal = () => {
  //   let total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  //   let grandTotal = total;

  //   if (formData.city !== 'Karachi' && total < 10000) {
  //     grandTotal += dc;
  //   }

  //   return isNaN(total) ? 0 : grandTotal;
  // };

  // const productTotal = () => {
  //   let productTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  //   return isNaN(productTotal) ? 0 : productTotal;
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   let updatedFormData = { ...formData, [name]: value };

  //   if (name === 'Karachi') {
  //     let newDc = 0; // Default to 0 for Karachi

  //     if (value !== 'Karachi') {
  //       if (value === 'Lahore') {
  //         newDc = 500;
  //       } else if (value === 'Multan') {
  //         newDc = 600;
  //       } else {
  //         newDc = 200; // Default delivery charge for other cities
  //       }
  //     }

  //     updatedFormData = { ...updatedFormData, delivery_charges: newDc };
  //     setDc(newDc);
  //   }

  //   setFormData(updatedFormData);
  // };

  // useEffect(() => {
  //   calculateTotal();
  // }, [formData]);



  const handleSubmit = async (e) => {
    setIsLoading(true);
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
      console.log(response)
      const orderData = await response.json();
      console.log('Order placed successfully:', orderData);

      if (formData.email.trim() !== '') {
        const emailResponse = await fetch(`/api/sendInvoiceMail`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customer: formData,
            products: JSON.parse(sessionStorage.getItem('cart')) || [],
            total: calculateTotal(),
            orderNo: orderData.order.order_no
          })
        })

        if (emailResponse.ok) {
          setIsLoading(false);

          toast.success("Order Placed Successfully", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });


          const orderId = orderData.order.order_no;
          setTimeout(() => {
            router.push(`/confirmation/${orderId}`);
          }, 1700);
          sessionStorage.removeItem('cart');

        } else {
          setIsLoading(false);

          toast.error("Something went wrong", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }

      } else {
        setIsLoading(false);

        toast.success("Order Placed Successfully", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });


        const orderId = orderData.order.order_no;
        setTimeout(() => {
          router.push(`/confirmation/${orderId}`);
        }, 1700);
        sessionStorage.removeItem('cart');
      }


    } else {
      setIsLoading(false);
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error('Failed to place order');
    }


    dispatch(setFormDataRedux(formData));
    dispatch(setCartRedux(cart));
    dispatch(setTotal(calculateTotal()));

  };

  return (
    <Wrapper>
      <Layout>
        <div className="container mt-5 pb-100 pt-170 cart-window">
          <Row>
            <Col sm={12} md={6} lg={6} >
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <select className="form-select" id="city" name="city" value={formData.city} onChange={handleChange} required>
                      <option value="">Select City</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Multan">Multan</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="f_name" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="f_name" name="f_name" value={formData.f_name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="l_name" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="l_name" name="l_name" value={formData.l_name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />

                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Address Line 2: <small>(Optional)</small> </label>
                    <input type="email" className="form-control" value={formData.add2} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="number" className="form-label">Phone:</label>
                    <input type="number" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange} required />
                  </div>


                  <div className='col-12' >
                    <button disabled={isLoading ? true : false} type="submit" className="contact-btn rounded-0 w-100 d-flex justify-content-center">
                      {isLoading ? (
                        <>
                          Placing Order
                          <div class="spinner-border text-light" role="status">
                          </div>
                        </>
                      ) : (
                        <>
                          Place Order

                        </>
                      )}


                    </button>

                  </div>

                </div>

              </form>
            </Col>
            <Col sm={12} md={6} lg={6} >
              <div className='row' >
                <div className='col-12 table-responsive' >

                  <table className='table' >
                    <tbody>
                      {
                        cart.map((val, index) => {
                          return (
                            <>
                              <tr>
                                <td> {val.name} </td>

                                <td> Rs {val.price * val.quantity === NaN ? '0' : val.price * val.quantity} </td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Subtotal</th>
                        <th> Rs {productTotal()}  </th>
                      </tr>
                      <tr>
                        <th>Shipping Fee</th>
                        <th>Rs {dc}  </th>
                      </tr>
                      <tr>
                        <th>Grand Total</th>
                        <th>Rs {calculateTotal()}</th>
                      </tr>
                    </tfoot>
                  </table>

                </div>
              </div>

              <p className='text-dark text-center' ><b>FREE SHIPPING</b> on shopping above Rs 10,000 ( Only Karachi ) </p>
            </Col>
          </Row>

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
      </Layout>
    </Wrapper>
  );
};

export default CheckoutPage;
