
import { useEffect , useState } from 'react';
import React from 'react';
import DashboardSidebar from '../../components/dashboard/sidebar.jsx';
import { Container } from 'reactstrap';
import TableFormat from '../../components/table.jsx';
import DashboardHeader from '../../components/dashboard/header.jsx';
import { CustomTable } from '../test.jsx';
import { useRouter } from 'next/router.js';
import AppUrl from '../../../server_config.js';

export default function dynamicOrder(result) {
    const router = useRouter()
    const [customers , setCustomers] = useState([])
    useEffect(()=>{
        console.log(result)
        setCustomers(result.result)
    },[])
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
            dataField: "customer_firstname",
            text: "Name",
            sort: true,
           
        },
        {
            dataField: "customer_phone",
            text: "Phone No",
            sort: true,
        },
       
        {
            dataField: "customer_email",
            text: "Email",
            sort: true,

        
        },

        {
            dataField: "customer_city",
            text: "City",
            sort: true,
        },
        {
            dataField: "total_orders",
            text: "Total Orders",
            sort: true,
        },
       
    ]
    const handleRowClick = async (route) => {
        try {
          await router.push(`/dashboard/customers/${route}`);
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
                        <DashboardHeader logOut={handleLogout} title="Customers" />
                        <Container className="p-4 wrapper" fluid>
                            <div style={{ marginTop: 100 }} >
                                <CustomTable columns={columns2} data={customers} handleClick={(e)=>handleRowClick(e.id)} />
                              
                        </div>
                        </Container>
                    </div>
                </div>
            </main>
        </>
    )
}





export async function getServerSideProps() {
    try {
        let loadItems = await fetch(`${AppUrl}/api/getcustomer`);
      let result = await loadItems.json();
      console.log(loadItems)
      console.log(result)
      return {
        props: { result }, 
      };
    } catch (error) {
      console.log(error);
      return {
        props: { result: null  },
      };
    }
  }
