import { Activity } from "./activity";

/**
 * An interface for EventDetails
 * @returns {interface}
 */
export interface EventDetailsType {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    imagePic: string;
}

export interface EventType {
    event_id: string;
    name: string;
    category: string;
    artist: string;
    description: string;
    event_banner_url: string;
    event_seatmap_url: string;
    status: string;
    type: string;
    sequence: string;
    activities?: Activity[];
}
