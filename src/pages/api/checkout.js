import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
const supabaseUrl = 'https://adjkbaqvoxmzorgmrees.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM';
const supabase = createClient(supabaseUrl, supabaseKey);

let orderNumber = 5000;

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { customer, cart } = req.body;

        try {
            const { customer, cart } = req.body;
            const orderTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const { data: exisCustomer, error: fetchExisCusError } = await supabase.from('customers').select().eq('customer_email', customer.email)
            if (exisCustomer.length > 0) {
                console.log('customer already exist')
            } else {
                const { error: customerError } = await supabase.from('customers').insert({
                    customer_firstname:  customer.f_name,
                    customer_lastname: customer.l_name,
                    customer_email: customer.email,
                    customer_phone: customer.number,
                    customer_address : customer.address , 
                    customer_city: customer.city
                })
                if (customerError) {
                    throw customerError
                }

            }
            const { data: fetchData, error: fetchError } = await supabase.from('customers').select('id').eq('customer_email', customer.email)
            console.log(fetchData[0].id)
            if (fetchError) {
                throw fetchError
            }
            const customOrderNumber = `NHC-${orderNumber}`;
            orderNumber++; 
            const { data: insertedOrder, error: orderError } = await supabase
                .from('orders')
                .insert([
                    {
                        customer_id: fetchData[0].id,
                        customer_email: customer.email,
                        customer_address: customer.address,
                        customer_firstname: customer.f_name,
                        customer_lastname: customer.l_name ,
                        order_total: orderTotal + customer.delivery_charges,
                        order_status: 'Pending',
                        delivery_charges: customer.delivery_charges ,
                        order_city: customer.city , 
                        phone_no: customer.number , 
                        payment_status: 'Unpaid' , 
                        order_no: customOrderNumber,
                        created_at: new Date().toDateString() + " " + new Date().toLocaleTimeString()
                    }
                ]);

            if (orderError) {
                throw orderError;
            }

            const { data: ordersList, error: ordersError } = await supabase.from('orders').select()
            if(ordersError) {
                throw ordersError
            } 

           

            const orderItems = cart.map(item => ({
                order_id: ordersList[ordersList.length - 1].id,
                product_id: item.id,
                product_name: item.name,
                product_price: item.price,
                quantity: item.quantity,
                product_total: item.price * item.quantity,
            }));


            const { data: insertedOrderItems, error: orderItemsError } = await supabase
                .from('orderItems')
                .insert(orderItems);


            if (orderItemsError) {
                throw orderItemsError;
            }

            const { data: customerOrders, error: customerOrdersError } = await supabase
            .from('orders')
            .select()
            .eq('customer_id' , fetchData[0].id  )
        if (ordersError) {
            throw ordersError;
        }
        console.log(customerOrders.length)


        const { data: setCustomerTotal , error: setCustomerTotalError } = await supabase.from('customers').update({total_orders : customerOrders.length}).eq('id', fetchData[0].id)

if(setCustomerTotalError) {
    throw setCustomerTotalError
}

console.log(setCustomerTotal)
            res.status(200).json({ success: true, order: insertedOrder, insertedOrderItems });
        } catch (error) {
            console.error('Error occurred during checkout:', error);
            res.status(500).json({ success: false, error: 'Error occurred during checkout' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}
