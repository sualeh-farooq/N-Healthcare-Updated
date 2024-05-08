import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
    try {
        let loadItems = await fetch(`http://localhost:3000/api/getcustomer`);
    
      let result = await loadItems.json();

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


export default function Customers(result){

    const [customers , setCustomers] = useState([])
    useEffect(()=>{
    setCustomers(result.result)
    },[])

        const router = useRouter();

    const handleRowClick = async (route) =>{

        try {
            await router.push(`/customers/${route}`)
        } catch (e) {
                console.log(e)
        }
        
    }
    return (
        <>
        <h4>List of all customers</h4>

        <table border="2px solid red" >
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>Phone</th>
                <th>Total Orders</th>
                <th>View</th>

            </thead>

            <tbody>
            {
            customers.map((val , index)=>{
                return (
                    <>
        <tr key={val.id} >

            <th> {val.customer_firstname} </th>
            <th> {val.customer_lastname} </th>
            <th> {val.customer_email} </th>
            <th> {val.customer_address} </th>
            <th> {val.customer_city} </th>
            <th> {val.customer_phone} </th>
            <th> {val.total_orders} </th>
            <th> <button onClick={()=>handleRowClick(val.id)} >View Customer</button>  </th>
        </tr>
                    
                    
                    
                     </>
                )
            })
        }
            </tbody>
        </table>


        
        </>
    )
}

