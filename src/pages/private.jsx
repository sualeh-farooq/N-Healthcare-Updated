
import { useRouter } from 'next/router';
import { createClient } from '../../utils/supabase/server-props.ts';
import { useEffect, useState } from 'react';
import React from 'react';

export default function PrivatePage({ user, orderResult, itemResult }) {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    console.log(orderResult)
    console.log(itemResult)
    setOrders(orderResult)
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



  return (
    <>
      <h1>Hello Admin !</h1>
      <button onClick={() => handleLogout()} >Logout</button>


      <h1>Orders</h1>

      <table border="1px solid black" >
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Date</th>
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
    orders.slice().reverse().map((val, index) => {
      console.log(val.customer_address);
      return (
        <React.Fragment key={val.id}>
          <tr>
            <th> {index + 1} </th>
            <th>{val.created_at.slice(0,10)}</th>
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

    const loadItems = await fetch('http://localhost:3000/api/getitem');
    const itemResult = await loadItems.json();

    const loadData = await fetch('http://localhost:3000/api/getorders');
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