import { SalesRound } from "./salesround";
import { TicketType } from "./ticket";

export interface Activity {
    activity_id: string;
    event_id: string;
    start_datetime: string;
    end_datetime: string;
    location: string;
    sales_rounds?: SalesRound[];
    ticket_types?: TicketType[];
}
