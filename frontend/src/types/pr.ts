import { SalesRoundAbstract } from "./salesround";

export interface PurchaseRequestItem {
    ticketTypeId: number;
    quantityRequested: number;
}

export interface PurchaseRequestItemWithDetails {
    ticketType: string;
    quantityRequested: number;
    price: number;
    eventStartDateTime: string;
    eventEndDateTime: string;
}

export interface PurchaseRequest {
    id: number;
    status: string;
    purchaseRequestItems: PurchaseRequestItemWithDetails[];
}

export interface PurchaseRequestForm {
    eventId: number;
    purchaseRequestItems: PurchaseRequestItem[];
}

export interface PurchaseRequestConfirmationSuccess {
    id: number;
    name: string;
    description: string;
    bannerURL: string;
    location: string;
    startDateTime: string;
    endDateTime: string;
    salesRound: SalesRoundAbstract;
    purchaseRequest: PurchaseRequest;
}
