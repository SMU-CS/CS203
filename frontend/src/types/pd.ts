import {PurchaseRequestItem} from "./pritem";

export interface PurchaseDetails {
    profile_id: string;
    event_name: string;
    purchase_request_item: PurchaseRequestItem[];
    facility_charge: number;

}