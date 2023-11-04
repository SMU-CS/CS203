import { PurchaseRequestItemWithDetails } from "../types/pr";

export const calcTicketPrice = (transactions: PurchaseRequestItemWithDetails[]) => {
    return transactions.reduce(
        (accumulator, purchase) => accumulator + purchase.price,
        0
    );
};

export const calcServiceFee = (
    transactions: PurchaseRequestItemWithDetails[],
    serviceFee: number
) => {
    return (calcTicketPrice(transactions) / 100) * serviceFee;
};

export const calcTotalPrice = (
    transactions: PurchaseRequestItemWithDetails[],
    serviceFee: number,
    facilityCharge: number
) => {
    return (
        calcTicketPrice(transactions) +
        calcServiceFee(transactions, serviceFee) +
        facilityCharge
    );
};

export const calculateTotalPrice = (
    purchaseRequestItems: PurchaseRequestItemWithDetails[]
) => {
    return purchaseRequestItems.reduce((acc, item) => acc + item.price, 0);
};

export const calculateNettTotal = (
    total: number,
    serviceFee: number,
    facilityCharge: number
) => {
    return total + serviceFee + facilityCharge;
};

export const calculateServiceFee = (total: number) => {
    return (total * 10) / 100;
};
