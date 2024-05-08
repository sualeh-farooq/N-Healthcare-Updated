import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export const getServerSideProps = async ({ params }) => {
    try {
        const { query } = params;
        let loadData = await fetch(`http://localhost:3000/api/getorders?customer_id=${params.id}`);
        let result = await loadData.json();

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


export default function IndCustomerView(result){
    // const [result , setResult] = useState([])
    // useEffect(()=>{
    //     console.log(result)
    // },[])

    const [orders , setOrders] = useState([])
    const router = useRouter()
    useEffect(()=>{
        console.log(result)
        console.log(result.result)
        setOrders(result.result)
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
        <h4>Customer View</h4>

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
               
            {orders.sort((a, b) => b.id - a.id).map((val , index)=>{
    console.log(val.customer_address)
    return (
        <>
        <tr>
            <th> {val.id} </th>
            <th> {val.customer_email} </th>
            <th> {val.customer_firstname} </th>
            <th> {val.customer_lastname} </th>
            <th> {val.order_status} </th>
            <th> {val.order_total} </th>
            <th>
                <button onClick={(e)=>handleRowClick(val.id)} >View order</button>
            </th>
        </tr>
        </>
    )
})}
            </tbody>
        </table>
        </>
    )
}