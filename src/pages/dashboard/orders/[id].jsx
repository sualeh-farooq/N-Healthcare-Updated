
import { useEffect, useState } from 'react';
import React from 'react';
import { createClient } from '../../../../utils/supabase/server-props.ts';
import { useRouter } from 'next/router';
import DashboardSidebar from '../../../components/dashboard/sidebar.jsx';
import { Card, Container, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import TableFormat from '../../../components/table.jsx';
import DashboardHeader from '../../../components/dashboard/header.jsx';
import { Badge } from 'reactstrap';
import { FaPen } from "react-icons/fa";
import AppUrl from '../../../../server_config.js';


export default function dynamicOrder({ result, loadItemsResult, args }) {
    const router = useRouter()
    const [orderItems, setOrderItems] = useState([])
    const [orderDetails, setOrderDetails] = useState([])
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)
    const { id } = router.query;
    const fetchData = async () => {
        let loadData = await fetch(`${AppUrl}/api/getorders?id=${id}`);
        let loadItems = await fetch(`${AppUrl}/api/getitem?order_id=${id}`);
        let result = await loadData.json();
        let loadItemsResult = await loadItems.json()

        setOrderItems(loadItemsResult)
        setOrderDetails(result[0])
        console.log(result)
        console.log(loadItemsResult)
    }
    useEffect(() => {
        setOrderItems(loadItemsResult)
        setOrderDetails(result[0])
    },[])

    setInterval(() => {
        fetchData()

    }, 3000);
      



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

    let date = " saus"

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
                                            <h5>Order # 1234</h5>
                                            <div className='gap-2 d-flex justify-content-between align-items-center' >
                                                <button className='contact-btn rounded-0 p-2' >Mark as Paid</button>
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
                                                                                Rs {orderDetails.order_total - orderDetails.delivery_charges}
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
                                                                                Rs {orderDetails.order_total}
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
                                                                    <td> <b> {date} </b> </td>
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
                                                                    <td className='d-flex align-items-center justify-content-between' >
                                                                        <b> {orderDetails.order_status === 'Pending' ? <Badge className='p-2' color='warning' >{orderDetails.order_status}</Badge> : <Badge className='p-2' color='success' >{orderDetails.order_status}</Badge>}  </b>
                                                                        <button className='btn_secondary' > <small>Change Status</small> </button>
                                                                    </td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Payment Status</td>
                                                                    <td> <b> {orderDetails.payment_status === 'Unpaid' ? <Badge className='p-2' color="danger" > {orderDetails.payment_status} </Badge> : <Badge color="info" > {orderDetails.payment_status} </Badge>}  </b> </td>
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




