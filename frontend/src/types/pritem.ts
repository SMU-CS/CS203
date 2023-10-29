export interface PurchaseRequestItem {
    ticket_type_id: string;
    activity_id: string;
    type: string;
    price: number;
    quantity: number;
    datetime: string;
    location: string;
}