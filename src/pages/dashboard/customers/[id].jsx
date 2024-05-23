import DashboardHeader from "../../../components/dashboard/header";
import DashboardSidebar from "../../../components/dashboard/sidebar";
import { Container } from "reactstrap";
import { createClient } from '../../../../utils/supabase/server-props.ts';
import AppUrl from "../../../../server_config";
import { useEffect, useState } from "react";
import { CustomTable } from "../../test";
import { useRouter } from "next/router";


export default function (result) {
    const [ordersData   , setOrdersData] = useState([])
    const router = useRouter()

    useEffect(()=>{
        setOrdersData(result.result)
    },[])
    console.log(result)
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


    const columns2 = [

        {
            dataField: "created_at",
            text: "Date",
            sort: true,

        },
        {
            dataField: "order_no",
            text: "Order No",
            sort: true,

        },
        {
            dataField: "order_status",
            text: "Order Status",
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

    
    const handleRowClick = async (route) => {
        try {
          await router.push(`/dashboard/orders/${route}`);
        } catch (e) {
          console.log(e);
        } 
      };

    return (
        <>

            <main>
                <div className="pageWrapper d-md-block d-lg-flex">
                    <aside
                        className={`sidebarArea shadow bg-dark showSidebar`}>
                        <DashboardSidebar showMobilemenu={() => showMobilemenu()} />
                    </aside>
                    <div className="contentArea">
                        <DashboardHeader isBack={true} logOut={handleLogout} title="Customer Orders" />
                        <Container className="p-4 wrapper" fluid>
                            <div style={{ marginTop: 100 }} >

<CustomTable data={ordersData}  columns={columns2} handleClick={(e)=>handleRowClick(e.id)}  />
                            </div>
                        </Container>
                    </div>
                </div>
            </main>

        </>
    )

}


export const getServerSideProps = async ({ params }) => {
    try {
        const { query } = params;
        const customerId = params.id;

        let loadData = await fetch(`${AppUrl}/api/getorders?customer_id=${customerId}`);
        let result = await loadData.json();

        console.log(customerId)
        return {
            props: { result },
        };
    } catch (error) {
        console.log(error);
        console.log("Error in getServerSideProps:", error);
        return {
            props: { result: null },
        };
    }
};
