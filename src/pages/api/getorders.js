import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabaseKey = process.env.NEXT_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    try {
        const { id, customer_id } = req.query;
        let data;
        if (id) {
            const { data: fetchData, error: ordersError } = await supabase
                .from('orders')
                .select()
                .eq('id', id);
            if (ordersError) {
                throw ordersError;
            }
            data = fetchData;
        } else if (customer_id) {
            const { data: fetchData, error: ordersError } = await supabase
                .from('orders')
                .select()
                .eq('customer_id', customer_id);
            if (ordersError) {
                throw ordersError;
            }
            data  = fetchData
        }
        else {
            const { data: fetchData, error: ordersError } = await supabase
                .from('orders')
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
