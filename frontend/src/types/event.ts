import { Activity } from "./activity";

export interface EventListingType {
    id: number
    name: string
    start_datetime: string
    end_datetime: string
    location: string
    bannerURL: string
}

export interface EventDetailsType {
    id: number
    name: string
    category: string
    artist: string
    description: string
    bannerURL: string
    seatMapURL: string
    activities: Activity[]
}
