export type Cart = {
    id: number;
    quantity: number;
}[];

export interface StripeCart {
    eventTitle: string;
    bannerURL: string;
    eventId: number;
    purchaseRequestId: number;
    successURL: string;
    failureURL: string;
    products: StripeCartItem[];
}

export interface StripeCartItem {
    ticketType: string;
    unitPrice: number;
    quantity: number;
    dateTime: string;
    ticketId: number;
}
