
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabaseUrl = 'https://adjkbaqvoxmzorgmrees.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method === 'POST') {

        console.log(req.body)

        try {



            const { error } = await supabase
                .from('orderItems')
                .delete()
                .eq('order_id', req.body.orderNo)

            if (error) {
                console.log(error)
            } else {
                console.log('previous record deleted successfully')
            }


            const orderItems = req.body.orderItem.map(item => ({
                order_id: req.body.orderNo,
                created_at: new Date(),
                product_id: item.product_id,
                product_name: item.product_name,
                product_price: item.product_price,
                quantity: item.quantity,
                product_total: item.product_price * item.quantity,
            }));

            const { data: insertedOrderItems, error: orderItemsError } = await supabase
                .from('orderItems')
                .insert(orderItems);

            if (orderItemsError) {
                throw orderItemsError;
            } else {
                console.log('order items updated')
            }


            const { orderTotalError } = await supabase
                .from('orders')
                .update({ order_total: req.body.orderTotal })
                .eq('id', req.body.orderNo)

            if (error) {
                throw error
            } else {
                console.log('order total updated')
            }
            res.status(200).json({ success: true,  });

        } catch (error) {
            console.error('Error occurred during checkout:', error);
            res.status(500).json({ success: false, error: 'Error occurred during proccess' });
        }


    }
}