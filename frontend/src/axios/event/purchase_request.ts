import {
    PurchaseRequestConfirmationSuccess,
    PurchaseRequestForm,
    PurchaseRequestItemWithDetails,
    PurchaseRequestListing,
} from "../../types/pr";
import { prInstance } from "../instance";

export const createPR = async (data: PurchaseRequestForm, token?: string) => {
    try {
        const { data: pr } = await prInstance.post(``, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return pr.purchaseRequestId;
    } catch (e) {
        throw e;
    }
};

export const getPRconfirmation = async (id?: string, token?: string) => {
    try {
        const { data: pr } = await prInstance.get(`${id}/confirmation`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return pr as PurchaseRequestConfirmationSuccess;
    } catch (e) {
        throw e;
    }
};

export const getAllPRs = async (token?: string) => {
    try {
        const { data: prs } = await prInstance.get(``, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return prs as PurchaseRequestListing[];
    } catch (e) {
        throw e;
    }
};

export const getPRItem = async (
    id: string,
    quantity: number,
    token?: string
) => {
    try {
        const { data: prItem } = await prInstance.get(`item/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });

        return {
            ...prItem,
            quantityRequested: quantity,
        } as PurchaseRequestItemWithDetails;
    } catch (e) {
        console.log(e);
    }
};
