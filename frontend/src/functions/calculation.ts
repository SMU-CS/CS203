import { OrderItems } from "../types/order";
import { PurchaseRequestItemWithDetails } from "../types/pr";

export const calcTicketPrice = (
    transactions: PurchaseRequestItemWithDetails[] | OrderItems[]
) => {
    return transactions.reduce(
        (accumulator, purchase) => accumulator + purchase.price,
        0
    );
};

export const calcServiceFee = (
    transactions: PurchaseRequestItemWithDetails[] | OrderItems[]
) => {
    return (calcTicketPrice(transactions) / 100) * 10;
};

export const calcTotalPrice = (
    transactions: PurchaseRequestItemWithDetails[] | OrderItems[],
    facilityCharge: number
) => {
    return (
        calcTicketPrice(transactions) +
        calcServiceFee(transactions) +
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
