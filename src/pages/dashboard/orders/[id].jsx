
import { useEffect, useState } from 'react';
import React from 'react';
import { createClient } from '../../../../utils/supabase/server-props.ts';
import { useRouter } from 'next/router';
import DashboardSidebar from '../../../components/dashboard/sidebar.jsx';
import { Card, Container, Modal, ModalHeader, ModalFooter, ModalBody, Button, Row, Col } from 'reactstrap';
import TableFormat from '../../../components/table.jsx';
import DashboardHeader from '../../../components/dashboard/header.jsx';
import { Badge } from 'reactstrap';
import { FaPen } from "react-icons/fa";
import { FormGroup, Label, Select, Input } from 'reactstrap'
import AppUrl from '../../../../server_config.js';
import { FaTrash } from 'react-icons/fa';

export default function dynamicOrder({ result, loadItemsResult, args }) {
    const router = useRouter()
    const [orderItems, setOrderItems] = useState([])
    const [orderDetails, setOrderDetails] = useState([])
    const [editModal, setEditModal] = useState(false)
    const [editItemModal, setEditItemModal] = useState(false)
    const [updateItems, setUpdateItems] = useState([])
    const [price, setPrice] = useState('')
    const [productTotal, setProductTotal] = useState('')
    const [productQuantity, setProductQuantity] = useState('')
    const [totalItems, setTotalItems] = useState(0);
    const [totalProductCost, setTotalProductCost] = useState(0);
    const [productId , setProductId] = useState('')
    const [orderStatus , setOrderStatus]  = useState('')
    const [statusChangeDiv ,setShowStatusChangeDiv  ] = useState(false)
    const [paymentStatus , setPaymentStatus] = useState('')
    const [paymentStatusChangeSec , setPaymentStatusChangeSec] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {

        let value = event.target.value
        setSelectedValue(event.target.value);
        

        if(value === 'NGS WHITENING / GLOWING SERUM') {
            setPrice(1520)
            setProductId(1)
            
        }  else if (value === 'NAS ANTI AGING SERUM') {
            setPrice(1520)
            setProductId(2)
        } else if (value === 'NMS ANTI MELASMA SERUM') {
            setPrice(1600)
            setProductId(3)
        }
        else if (value === 'NGP HAIRFALL SPRAY') {
            setPrice(1440)
            setProductId(4)
        }
        else if (value === 'NBG WHITENING / GLOWING SOAP') {
            setPrice(440)
            setProductId(5)
        }
        else if (value === 'NBA ANTI ACNE SOAP') {
            setPrice(240)
            setProductId(6)
        }
        else if (value === 'NBM MOISTURIZING LOTION') {
            setPrice(360)
            setProductId(7)
        }
    };

    const productQuantityHandler = (event) => {
        const quantity = parseInt(event.target.value);
        setProductQuantity(quantity);
        const totalProductCost = quantity * price;
        setProductTotal(totalProductCost);
    }

    const toggleEdit = () => setEditModal(!editModal)
    const toggleItem = () => setEditItemModal(!editItemModal)
    const { id } = router.query;
    const fetchData = async () => {
        let loadData = await fetch(`${AppUrl}/api/getorders?id=${id}`);
        let loadItems = await fetch(`${AppUrl}/api/getitem?order_id=${id}`);
        let result = await loadData.json();
        let loadItemsResult = await loadItems.json()

        console.log(loadItemsResult)
        setOrderItems(loadItemsResult)
        setOrderDetails(result[0])



    }
    useEffect(() => {
        console.log(result)
        setOrderItems(loadItemsResult)
        setOrderDetails(result[0])
        setUpdateItems(loadItemsResult)
        fetchData()
        setOrderStatus(result[0].order_status)
        setPaymentStatus(result[0].payment_status)

    }, [])


    const handleAddProduct = () => {
        if (selectedValue && productQuantity && price) {
            const newItem = {
                product_id: productId, 
                product_name: selectedValue,
                product_price: price,
                quantity: productQuantity,
                product_total: productTotal
            };
    
            setUpdateItems([...updateItems, newItem]);
    
            // Clear input fields after adding item
            setSelectedValue('');
            setPrice('');
            setProductQuantity('');
            setProductTotal('');

            setTimeout(() => {
                console.log(updateItems)
            }, 2000);
        }
    }

    useEffect(() => {
        let totalQuantity = 0;
        let totalCost = 0;
    
        updateItems.forEach(item => {
            totalQuantity += item.quantity;
            totalCost += item.product_total;
        });
    
        setTotalItems(totalQuantity);
        setTotalProductCost(totalCost);
    }, [updateItems])


    const handleLogout = async () => {
        "use server"
        const supabase = createClient();
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw error
        }
        console.log('logout success');
        document.cookie = 'sb-adjkbaqvoxmzorgmrees-auth-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/login');
    };


    const handleDeleteItem = (id) => {
        const updatedItemsDel = updateItems.filter(item => item.id !== id);
        setUpdateItems(updatedItemsDel);

        console.log(updatedItemsDel)

        setTimeout(() => {
            console.log(updatedItemsDel)
        }, 2000);

        console.log(id)
    }
    




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(updateItems);
        const response = await fetch('/api/updateItem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderItem: updateItems,
            orderNo: orderDetails.id , 
            orderTotal: +totalProductCost  + +orderDetails.delivery_charges
          }),
        });

      if(response.status === 200) {
        fetchData()
        setEditItemModal(!editItemModal)
      }
    }



    const orderStatusSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('/api/updateOrderStatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderStatus: orderStatus,
            orderNo: orderDetails.id , 
          }),
        });
        setShowStatusChangeDiv(!statusChangeDiv)
        if(response.status === 200) {
            fetchData()
        }
    }



    const paymentStatusSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('/api/updatePaymentStatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentStatus: paymentStatus,
            orderNo: orderDetails.id , 
          }),
        });
        setPaymentStatusChangeSec(!paymentStatusChangeSec)
        if(response.status === 200) {
            fetchData()
        }
    }

    return (
        <>
            <main>
                <div className="pageWrapper d-md-block d-lg-flex">
                    <aside
                        className={`sidebarArea shadow bg-dark showSidebar`}>
                        <DashboardSidebar showMobilemenu={() => showMobilemenu()} />
                    </aside>
                    <div className="contentArea">
                        <DashboardHeader isBack={true} logOut={handleLogout} title="Order Details" />
                        <Container className="p-4 wrapper" fluid>
                            <div style={{ marginTop: 80 }} >

                                <div className='d-flex align-items-center justify-content-between' >

                                </div>

                                <div className='row' >
                                    <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8' >
                                        <div className='w-100 d-flex justify-content-between' >
                                            <h5>Order # {orderDetails.order_no}</h5>
                                            <div className='gap-2 d-flex justify-content-between align-items-center' >
                                                <button onClick={() => setEditItemModal(true)} className='btn_secondary rounded-0 p-2' >Edit Order Items</button>
                                                {/* <button className='contact-btn rounded-0 p-2' >Mark as Paid</button> */}
                                            </div>

                                        </div>
                                        <div className='row' >
                                            <div className='col-12 my-2' >
                                                <Card className='p-2 bg-gray '  >
                                                    <table className='table table-bordered' >
                                                        <thead>
                                                            <tr>
                                                                <th>Serial No</th>
                                                                <th>Product Name</th>
                                                                <th>Price</th>
                                                                <th>Qty</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {console.log(orderItems)}
                                                            {orderItems.length > 0 ? (
                                                                orderItems.map((val, index) => {
                                                                    return (
                                                                        <>
                                                                            <tr key={val.id} >
                                                                                <td> {index + 1} </td>
                                                                                <td> {val.product_name} </td>
                                                                                <td> Rs {val.product_price} </td>
                                                                                <td> {val.quantity} </td>
                                                                                <td> Rs {val.product_total} </td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                })

                                                            ) : (
                                                                <>
                                                                    <tr>
                                                                        <td colSpan={5} >
                                                                            No Item Available
                                                                        </td>

                                                                    </tr>
                                                                </>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </Card>
                                            </div>
                                            <div className='col-12 my-3' >
                                                <Card className='p-2 bg-gray '  >
                                                    <table className='table table-bordered' >
                                                        <thead>
                                                            <tr>
                                                                <th>Cart Totals</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <>
                                                                <tr>
                                                                    <td> Subtotal : </td>
                                                                    <td>
                                                                        {/* {orderDetails.length > 0 ? ( */}

                                                                       
                                                                        <>

                                                                            Rs {Number(orderDetails.order_total) - Number(orderDetails.delivery_charges)}
                                                                        </>
                                                                        {/* ) : ( */}
                                                                        {/* null */}
                                                                        {/* )} */}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> Shipping : </td>
                                                                    <td>
                                                                        {/* {orderDetails.length > 0 ? ( */}
                                                                        <>
                                                                            Rs {orderDetails.delivery_charges}
                                                                        </>
                                                                        {/* ) : ( */}
                                                                        {/* null */}
                                                                        {/* )} */}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> Tax (GST) : </td>
                                                                    <td> 0 </td>
                                                                </tr>
                                                                <tr>
                                                                    <td> <b>Total Price :</b> </td>
                                                                    <td>
                                                                        {/* {orderDetails.length > 0 ? ( */}
                                                                        {/* <> */}
                                                                        Rs {Number(orderDetails.order_total)  }
                                                                        {/* </> */}
                                                                        {/* ) : ( */}
                                                                        {/* null */}
                                                                        {/* )} */}
                                                                    </td>
                                                                </tr>
                                                            </>

                                                        </tbody>
                                                    </table>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4' >
                                        <div className='row' >
                                            <div className='col-12 my-2' >
                                                <Card className='p-3' >
                                                    <div>
                                                        <div className='d-flex align-items-center justify-content-between mb-2' >
                                                            <h5> Summary</h5>
                                                            <FaPen style={{ cursor: 'pointer' }} className='cursor-pointer' onClick={() => toggleEdit()} size={20} />
                                                        </div>
                                                        <table className='table ' >
                                                            <tbody>
                                                                <tr>
                                                                    <td>Date</td>
                                                                    <td> <b> {orderDetails.created_at} </b> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Customer Name</td>
                                                                    <td> <b> {orderDetails.customer_firstname} {orderDetails.customer_lastname} </b> </td>

                                                                </tr>
                                                                <tr>
                                                                    <td>City</td>
                                                                    <td> <b> {orderDetails.order_city}  </b> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Order Status</td>
                                                                    <td className='d-flex align-items-center justify-content-between flex-column' >
                                                                        <div>
                                                                        <b> {
                                                                        orderDetails.order_status === 'Pending' ? <Badge className='p-2' color='warning' >{orderDetails.order_status}</Badge> : orderDetails.order_status === 'Processing' ? <Badge className='p-2' color='info' >{orderDetails.order_status}</Badge> : orderDetails.order_status === 'Delivered' ? <Badge className='p-2' color='success' >{orderDetails.order_status}</Badge> : <Badge className='p-2' color='danger' >{orderDetails.order_status}</Badge> }  </b>
                                                                        <button onClick={()=>setShowStatusChangeDiv(!statusChangeDiv)} className='btn_secondary' > <small>Change Status</small> </button>
                                                                       
                                                                        </div>
                                                                       {
                                                                        statusChangeDiv ? (

                                                                                <>
                                                                                
                                                                                <div className='w-100 mt-3' >
                                                                       <select value={orderStatus} onChange={(e)=>setOrderStatus(e.target.value)} className='form-select' >
                                                                            <option value="Pending" >Pending</option>
                                                                            <option value="Processing" >Processing</option>
                                                                            <option value="Delivered" >Delivered</option>
                                                                            <option value="Cancelled" >Cancelled</option>
                                                                        </select>
                                                                       </div>
                                                                       <Button onClick={orderStatusSubmit} className='my-2 w-100' >Update</Button>
                                                                                </>
                                                                        ) : (
                                                                            null
                                                                        )
                                                                       }
                                                                    </td>



                                                                </tr>
                                                                <tr>
                                                                    <td>Payment Status</td>
                                                                    <td className='d-flex align-items-center justify-content-between flex-column' >
                                                                        <div  >
                                                                        <b> {orderDetails.payment_status === 'Unpaid' ? <Badge className='p-2' color="danger" > {orderDetails.payment_status} </Badge> :  orderDetails.payment_status === "Paid" ? <Badge className='p-2' color="success" > {orderDetails.payment_status} </Badge> : <Badge className='p-2' color="warning" > {orderDetails.payment_status} </Badge> }  </b> 
                                                                         <button onClick={()=>setPaymentStatusChangeSec(!paymentStatusChangeSec)} className='btn_secondary' > <small>Change Status</small> </button>
                                                                       
                                                                        </div>
                                                                    {
                                                                        paymentStatusChangeSec ? (

                                                                                <>
                                                                                
                                                                                <div className='w-100 mt-3' >
                                                                       <select value={paymentStatus} onChange={(e)=>setPaymentStatus(e.target.value)} className='form-select' >
                                                                            <option value="Unpaid" >Unpaid</option>
                                                                            <option value="Paid" >Paid</option>
                                                                            <option value="Refund" >Refund</option>
                                                                        </select>
                                                                       </div>
                                                                       <Button onClick={paymentStatusSubmit} className='my-2 w-100' >Update</Button>
                                                                                </>
                                                                        ) : (
                                                                            null
                                                                        )
                                                                       }
                                                                    </td>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <Card className='p-2 border-0' >
                                                        <h6> Shipping Address</h6>
                                                        <p> {orderDetails.customer_address}  </p>

                                                    </Card>


                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Container>
                    </div>
                </div>
            </main>




            <Modal size='lg' isOpen={editItemModal} toggle={toggleItem} {...args} >
                <ModalHeader toggle={toggleItem}>Add / Edit Items </ModalHeader>
                <ModalBody>

                    <Row>
                        <Col sm={12} md={12} lg={6} xl={6} >
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Select Products
                                </Label>
                                <div>
                                    <select id="exampleSelect" name="select" className='form-select' onChange={handleChange} value={selectedValue}>
                                        <option value="">Select an option</option>
                                        <option value="NGS WHITENING / GLOWING SERUM">NGS WHITENING / GLOWING SERUM</option>
                                        <option value="NAS ANTI AGING SERUM">NAS ANTI AGING SERUM</option>
                                        <option value="NMS ANTI MELASMA SERUM">NMS ANTI MELASMA SERUM</option>
                                        <option value="NGP HAIRFALL SPRAY">NGP HAIRFALL SPRAY</option>
                                        <option value="NBG WHITENING / GLOWING SOAP">NBG WHITENING / GLOWING SOAP</option>
                                        <option value="NBA ANTI ACNE SOAP">NBA ANTI ACNE SOAP</option>
                                        <option value="NBM MOISTURIZING LOTION">NBM MOISTURIZING LOTION</option>

                                    </select>
                                    {/* <p>Selected value: {selectedValue}</p> */}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6} >
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Price
                                </Label>
                                <Input disabled value={price} />
                            </FormGroup>

                        </Col>

                        <Col sm={12} md={12} lg={6} xl={6} >
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Quantity
                                </Label>
                                <Input type='number' min={1} value={productQuantity} onChange={productQuantityHandler} />
                            </FormGroup>

                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6} >
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Total
                                </Label>
                                <Input  type='number'  disabled value={productTotal} />
                            </FormGroup>

                        </Col>

                        <Col sm={12} md={12} lg={6} xl={6} >
                            <Button onClick={()=>handleAddProduct()} color="primary" >Add Product</Button>
                        </Col>
                    </Row>

                    <Row className='my-3' >

                        <Col sm={12} >
                            <table className='table table-bordered' >
                                <thead>
                                    <tr>
                                        <th>Serial No</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {updateItems.length > 0 ? (
                                        updateItems.map((val, index) => {
                                            return (
                                                <>
                                                    <tr key={val.id} >
                                                        <td> {index + 1} </td>
                                                        <td> {val.product_name} </td>
                                                        <td> Rs {val.product_price} </td>
                                                        <td> {val.quantity} </td>
                                                        <td> Rs {val.product_total} </td>
                                                        <td>
                <Button color="danger" className='py-1 px-2' type='button' onClick={() => handleDeleteItem(val.id)}><FaTrash size={15} /></Button>
            </td>
                                                    </tr>
                                                </>
                                            )
                                        })


                                    ) : (
                                        <>
                                            <tr>
                                                <td colSpan={5} >
                                                    No Item Available
                                                </td>

                                            </tr>
                                        </>
                                    )}
                                  
                                    <tr>
                                        
                                        <th style={{textAlign: 'right'}} colSpan={4} >Grand Total</th>
                                        <th>Rs {totalProductCost}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>






                </ModalBody>
                <ModalFooter>
                    <Button className="btn-secondary rounded-0 px-4 py-2" onClick={toggleItem}>
                        Cancel
                    </Button>
                    <Button className="contact-btn rounded-0 px-4 py-2" onClick={(e)=>handleSubmit(e)}>
                        Add
                    </Button>{' '}

                </ModalFooter>
            </Modal>

            <Modal isOpen={editModal} toggle={toggleEdit} {...args} >
                <ModalHeader toggle={toggleEdit}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleEdit}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleEdit}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )

    return (
        <>

        </>
    )
}



export const getServerSideProps = async ({ params }) => {
    try {
        const { query } = params;
        const orderId = params.id;

        let loadData = await fetch(`${AppUrl}/api/getorders?id=${orderId}`);
        let loadItems = await fetch(`${AppUrl}/api/getitem?order_id=${orderId}`);
        let result = await loadData.json();
        let loadItemsResult = await loadItems.json()

        console.log(orderId)
        return {
            props: { result, loadItemsResult },
        };
    } catch (error) {
        console.log(error);
        console.log("Error in getServerSideProps:", error);
        return {
            props: { result: null, loadItemsResult: null },
        };
    }
};




