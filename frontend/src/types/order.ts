export interface OrderListing {
    id: number;
    eventName: string;
    status: "recurring" | "past";
    bannerURL: string;
}

export interface OrderDetails {
    id: number;
    customerId: string;
    purchaseRequestId: number;
    eventId: number;
    paymentDateTime: string;
    totalAmount: number;
    eventName: string;
    eventCategory: string;
    eventArtist: string;
    eventBannerURL: string;
    eventSeatMapURL: string;
    eventLocation: string;
    eventStartTime: string;
    eventEndTime: string;
    orderItems: OrderItems[];
}

export interface OrderItems {
    id: number;
    ticketType: string;
    quantity: number;
    price: number;
    startTime: string;
    endTime: string;
    location: string;
}
