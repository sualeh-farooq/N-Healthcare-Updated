import { useEffect } from "react";

export const getServerSideProps = async ({ params }) => {
    try {
        const { query } = params;
        const orderId = params.id;
        console.log(orderId)

        let loadData = await fetch(`http://localhost:3000/api/getorders?id=${orderId}`);
        let loadItems = await fetch(`http://localhost:3000/api/getitem?order_id=${orderId}`);
        let result = await loadData.json();
        let loadItemsResult = await loadItems.json()
        return {
            props: { result, loadItemsResult },
        };
    } catch (error) {
        console.log(error);
        console.log("Error in getServerSideProps:", error);
        return {
            props: { result: null, loadItemsResult: null },
        };
    }
};

export default function dynamicOrder(result, loadItemsResult) {
    useEffect(() => {
        console.log(result)
        console.log(loadItemsResult)
    }, [])
    return (
        <>
            <h4>order view page</h4>
        </>
    )
}




