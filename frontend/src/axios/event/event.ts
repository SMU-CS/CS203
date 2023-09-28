import { eventInstance } from "../instance";
import { EventDetailsType, EventListingType } from "../../types/event";
import {
    formatDateToDateWithDay,
    formatDatetoDateTimeWithDay,
} from "../../functions/formatter";
import { Activity } from "../../types/activity";

export const listEvents = async (isFeatured?: boolean) => {
    try {
        const { data: events } = await eventInstance.get(``, {
            params: { featuredOnly: isFeatured ? "true" : "false" },
        });

        return (events as EventListingType[]).map(
            ({ start_datetime, end_datetime, ...other }) => ({
                ...other,
                start_datetime: formatDateToDateWithDay(
                    new Date(start_datetime)
                ),
                end_datetime: formatDateToDateWithDay(new Date(end_datetime)),
            })
        ) as EventListingType[];
    } catch (e) {
        throw e
    }
};

export const getEvent = async (id?: number | string) => {
    try {
        const { data } = await eventInstance.get(`/${id}`);

        let event = {
            ...data,
            start_datetime: formatDateToDateWithDay(
                new Date(data.start_datetime)
            ),
            end_datetime: formatDateToDateWithDay(new Date(data.end_datetime)),
            activities: data.activities.map(
                ({ startDateTime, endDateTime, ...other }: Activity) => ({
                    ...other,
                    startDateTime: formatDatetoDateTimeWithDay(
                        new Date(startDateTime)
                    ),
                    endDateTime: formatDatetoDateTimeWithDay(
                        new Date(endDateTime)
                    ),
                })
            ),
        };

        return event as EventDetailsType;
    } catch (e) {
        throw e
    }
};
