import { Activity } from "./activity";
import { AdmissionPolicy } from "./admissionpolicy";

export interface EventListingType {
    id: number;
    name: string;
    start_datetime: string;
    end_datetime: string;
    location: string;
    bannerURL: string;
}

export interface EventDetailsType {
    id: number;
    name: string;
    category: string;
    artist: string;
    start_datetime: string;
    end_datetime: string;
    description: string;
    bannerURL: string;
    seatMapURL: string;
    location: string;
    activities: Activity[];
    admissionPolicies: AdmissionPolicy[];
}
