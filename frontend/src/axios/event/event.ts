import { eventInstance } from "../instance";
import { EventListingType } from "../../types/event";
import { formatDateToDateWithDay } from "../../functions/formatter";

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
        console.log(e);
    }
};
