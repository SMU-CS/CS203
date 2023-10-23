import { Container } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EventBreadCrumbLinks from "./EventBreadcrumbLinks";
import { EventDetailsType } from "../../../types/event";

const defaultPages = [
    { to: "/", text: "Home" },
    { to: "/event", text: "Events" },
];

interface EventBreadCrumbProps {
    page: "event-details" | "buy-tickets" | "pr-request";
    event: EventDetailsType;
}

const EventBreadCrumb: React.FC<EventBreadCrumbProps> = ({ page, event }) => {
    return (
        <Container maxWidth="xl" sx={{ m: "1rem" }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                {defaultPages.map(({ to, text }) => (
                    <EventBreadCrumbLinks
                        key={text}
                        to={to}
                        text={text}
                    />
                ))}

                <EventBreadCrumbLinks
                    key={event.id}
                    to={`/event/${event.id}`}
                    text={event.name}
                    bold={page === "event-details"}
                />
                {page === "buy-tickets" && (
                    <EventBreadCrumbLinks
                        key="tickets"
                        text="Buy Tickets"
                        to={`/purchase/${event.id}`}
                        bold
                    />
                )}
                {page === "pr-request" && (
                    <EventBreadCrumbLinks
                        key="tickets"
                        text="Purchase Request Confirmation"
                        to={`/view-purchase/${event.id}`}
                        bold
                    />
                )}
            </Breadcrumbs>
        </Container>
    );
};

export default EventBreadCrumb;
