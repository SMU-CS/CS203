import { OrderDetails, OrderListing } from "../../types/order";
import { orderInstance } from "../instance";

export const getAllOrders = async (token?: string) => {
    try {
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

export const getOrderById = async (id?: string, token?: string) => {
    try {
        const { data: orderDirty } = await orderInstance.get(`/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });

        const orderItems = (orderDirty as OrderDetails).orderItems.map(
            (item) => ({ ...item, location: orderDirty.eventLocation })
        );
        return { ...orderDirty, orderItems } as OrderDetails;
    } catch (e) {
        throw e;
    }
};

export const checkout = async (id?: string, token?: string) => {
    try {
        const { data: receipt } = await orderInstance.post(`/checkout/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return receipt;
    } catch (e) {
        throw e;
    }
};
