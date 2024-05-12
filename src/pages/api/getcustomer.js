import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://adjkbaqvoxmzorgmrees.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    try {
        let data;
        const { data: fetchData, error: ordersError } = await supabase
            .from('customers')
            .select()
        if (ordersError) {
            throw ordersError;
        }
        data = fetchData;
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching orders: ", error);
        res.status(500).json({ error: "Failed to fetch orders" });
    }
}
