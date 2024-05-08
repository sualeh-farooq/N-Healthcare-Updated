import { useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
    try {
        let loadItems = await fetch(`http://localhost:3000/api/getitem`);
      let loadData = await fetch(`http://localhost:3000/api/getorders`);

      let result = await loadData.json();

      let itemResult = await loadItems.json()

      return {
        props: { result  , itemResult}, 
      };
    } catch (error) {
      console.log(error);
      return {
        props: { result: null  },
      };
    }
  }

export default function orders(result){
    const [orders , setOrders] = useState([])
    const router = useRouter()
    useEffect(()=>{
        console.log(result)
        console.log(result.result)
        setOrders(result.result)

        console.log(orders)
        
    },[])
    const handleRowClick = async (route) => {
        try {
          await router.push(`/orders/${route}`);
        } catch (e) {
          console.log(e);
        } 
      };
    return (
        <>
        <h1>Orders</h1>

        <table border="1px solid black" >
            <thead>
                <tr>
                    <th>serial no</th>
                    <th>customer_email</th>
                    <th>customer first name</th>
                    <th>customer last name</th>
                    <th>order status</th>
                    <th>order total</th>
                    <th>view</th>
                  
                </tr>
            </thead>
            <tbody>
            

{orders.length > 0 ? (
    orders.map((val, index) => {
        console.log(val.customer_address);
        return (
            <React.Fragment key={val.id}>
                <tr>
                    <th>{val.id}</th>
                    <th>{val.customer_email}</th>
                    <th>{val.customer_firstname}</th>
                    <th>{val.customer_lastname}</th>
                    <th>{val.order_status}</th>
                    <th>{val.order_total}</th>
                    <th>
                        <button onClick={(e) => handleRowClick(val.id)}>View order</button>
                    </th>
                </tr>
            </React.Fragment>
        );
    })
) : null}

            </tbody>
        </table>
        </>
    )
}