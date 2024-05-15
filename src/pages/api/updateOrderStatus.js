
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabaseUrl = 'https://adjkbaqvoxmzorgmrees.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method === 'POST') {

        try {
            const { orderStatus, orderNo } = req.body
            const { orderStatusError } = await supabase
                .from('orders')
                .update({ order_status: orderStatus })
                .eq('id', orderNo)

            if (orderStatusError) {
                console.log(orderStatusError)
            } else {
                console.log('order status updated success')
            }

            res.status(200).json({ success: true, });
        } catch (error) {

            console.error('Error occurred during checkout:', error);
            res.status(500).json({ success: false, error: 'Error occurred during proccess' });

        }
    }
}