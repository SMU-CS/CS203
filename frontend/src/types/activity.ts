import { TicketType } from "./ticket";

export interface Activity {
    id: string;
    start_datetime: string;
    end_datetime: string;
    location: string;
    ticket: TicketType[];
}
