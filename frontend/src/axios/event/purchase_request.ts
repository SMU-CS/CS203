import { PurchaseRequestConfirmationSuccess, PurchaseRequestForm } from "../../types/pr";
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
