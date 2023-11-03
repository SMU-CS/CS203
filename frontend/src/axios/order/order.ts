import { OrderListing } from "../../types/order";
import { orderInstance } from "../instance";

export const getAllOrders = async (token?: string) => {
    try {
        console.log(token);
        const { data: orders } = await orderInstance.get(``, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return orders as OrderListing[];
    } catch (e) {
        throw e;
    }
};
