import { TicketType } from "./ticket";

export interface Activity {
    id: string;
    startDateTime: string;
    endDateTime: string;
    location: string;
    ticketTypes: TicketType[];
}
