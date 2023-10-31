export interface OrderListing {
    id: number;
    eventName: string;
    status: "recurring" | "past";
    bannerURL: string;
}