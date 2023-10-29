import { PurchaseDetails } from "../../../types/pd";

const mockPurchaseRequestItemData: PurchaseDetails[] = [
    {
        profile_id: "1",
        event_name: "TWICE 5TH WORLD TOUR 'READY TO BE' IN SINGAPORE",
        purchase_request_item: [
            {
                ticket_type_id: "1",
                activity_id: "1",
                type: "Standard - Cat A",
                price: 50,
                quantity: 1,
                datetime: "09/02/2023 6:00 PM",
                location: "Singapore Indoor Stadium",
            },
            {
                ticket_type_id: "2",
                activity_id: "1",
                type: "Standard - Cat B",
                price: 25,
                quantity: 1,
                datetime: "09/02/2023 6:00 PM",
                location: "Singapore Indoor Stadium",
            },
        ],
        facility_charge: 10,
    },
];
export default mockPurchaseRequestItemData;
