import { StripeCart } from "../../types/cart";
import { OrderDetails, OrderListing } from "../../types/order";
import { checkoutInstance, orderInstance } from "../instance";

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

export const checkout = async (checkoutData: StripeCart, token?: string) => {
    try {
        const { data: url } = await checkoutInstance.post(
            `/hosted`,
            checkoutData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        window.location.href = url;
        return;
    } catch (e) {
        throw e;
    }
};

export const getOrderByPRId = async (id?: string, token?:string) => {
    try{
        const { data: orderDirty } = await orderInstance.get(`/purchase-request/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });

        const orderItems = (orderDirty as OrderDetails).orderItems.map(
            (item) => ({ ...item, location: orderDirty.eventLocation })
        );
        
        return { ...orderDirty, orderItems } as OrderDetails;
    }catch(e){
        throw e
    }
}
