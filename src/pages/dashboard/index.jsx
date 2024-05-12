
import { useRouter } from 'next/router';
import { createClient } from '../../../utils/supabase/server-props.ts';
import { useEffect, useState } from 'react';
import React from 'react';
import DashboardLayout from '../../layout/dashboardLayout.jsx';
import DashboardSidebar from '../../components/dashboard/sidebar.jsx';
import { Container } from 'reactstrap';
// import TableFormat from '../../components/table.jsx';
import DashboardHeader from '../../components/dashboard/header.jsx';
import AppUrl from '../../../server_config.js' 

export default function PrivatePage({ user, orderResult, itemResult }) {
    const [orders, setOrders] = useState([])
    const [data, setData] = useState([])

    const fetchOrders = async () =>{
        await fetch(`${AppUrl}/api/getorders`).then((res)=>res.json()).then((data)=>setOrders(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))))
    }
    setInterval(() => {
        fetchOrders()
    }, 10000);
    useEffect(() => {
        console.log(orderResult)
        console.log(itemResult)
        setOrders(orderResult.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    }, [])
    const router = useRouter()
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

    const handleRowClick = async (route) => {
        try {
          await router.push(`/dashboard/orders/${route}`);
        } catch (e) {
          console.log(e);
        } 
      };

    const columns2 = [

        {
            dataField: "created_at",
            text: "Date",
            sort: true,
           
        },
        {
            dataField: "customer_firstname",
            text: "First Name",
            sort: true,
        },
        {
            dataField: "customer_lastname",
            text: "Last Name",
            sort: true,
        },
        {
            dataField: "order_status",
            text: "Order Status",
            sort: true,
        },

        {
            dataField: "order_city",
            text: "City",
            sort: true,
        },
        {
            dataField: "payment_status",
            text: "Payment Status",
            sort: true,
        },
        {
            dataField: "order_total",
            text: "Amount",
            sort: true,
        },

    ]

    return (
        <>
            <main>
                <div className="pageWrapper d-md-block d-lg-flex">
                    <aside
                        className={`sidebarArea shadow bg-dark showSidebar`}>
                        <DashboardSidebar showMobilemenu={() => showMobilemenu()} />
                    </aside>
                    <div className="contentArea">
                        <DashboardHeader logOut={handleLogout} title="Orders" />
                        <Container className="p-4 wrapper" fluid>
                            <div style={{ marginTop: 100 }} >
                                {/* <TableFormat
                                    placeholder="Search"
                                    onRowClick={(e) => handleRowClick(e.id)}
                                    columns={columns2}
                                    data={orders}
                                /> */}
                            </div>
                        </Container>
                    </div>
                </div>
            </main>
        </>
    )
}






export async function getServerSideProps(context) {
    try {
        const supabase = createClient(context);
        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError || !userData) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }

        const loadItems = await fetch(`${AppUrl}/api/getitem`);
        const itemResult = await loadItems.json();

        const loadData = await fetch(`${AppUrl}/api/getorders`);
        const orderResult = await loadData.json();

        return {
            props: {
                user: userData.user,
                itemResult,
                orderResult,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                user: null,
                itemResult: null,
                orderResult: null,
            },
        };
    }
}

