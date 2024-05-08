import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.NEXT_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    try {
        const { order_id } = req.query;
        let data;
        if (order_id) {
            const { data: fetchData, error: ordersError } = await supabase
                .from('orderItems')
                .select()
                .eq('order_id', order_id);
            if (ordersError) {
                throw ordersError;
            }
            data = fetchData;
        } else {
            const { data: fetchData, error: ordersError } = await supabase
                .from('orderItems')
                .select();
            if (ordersError) {
                throw ordersError;
            }
            data = fetchData;
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching orders: ", error);
        res.status(500).json({ error: "Failed to fetch orders" });
    }
}
