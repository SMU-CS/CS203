import { Container } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EventBreadCrumbLinks from "./EventBreadcrumbLinks";
import { useLocation } from "react-router-dom";

const defaultPages = [
    { to: "/", text: "Home" },
    { to: "/event", text: "Events" },
];

type PageType =
    | "purchase"
    | "confirmation"
    | "fulfil"
    | "view-purchase"
    | "orders"
    | "view-ticket"
    | "view-past-event";

const additionalRoutes = {
    purchase: "Buy Ticket",
    confirmation: "Purchase Request Confirmation",
    fulfil: "Fulfill Purchase Request",
    "view-purchase": "View Purchase Request",
    orders: "Payment Confirmation",
    "view-ticket": "View Ticket",
    "view-past-event": "View History",
};

interface EventBreadCrumbProps {
    eventId: string | number;
    eventName: string;
}

const EventBreadCrumb: React.FC<EventBreadCrumbProps> = ({
    eventId,
    eventName,
}) => {
    const location = useLocation();
    const currentPath = location.pathname.split("/")[1];

    return (
        <Container maxWidth="xl" sx={{ m: "1rem" }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                {defaultPages.map(({ to, text }) => (
                    <EventBreadCrumbLinks key={text} to={to}>
                        {text}
                    </EventBreadCrumbLinks>
                ))}

                <EventBreadCrumbLinks
                    to={`/event/${eventId}`}
                    bold={currentPath === "event"}
                >
                    {eventName}
                </EventBreadCrumbLinks>

                {currentPath !== "event" && (
                    <EventBreadCrumbLinks to={``} bold>
                        {additionalRoutes[currentPath as PageType]
                            ? additionalRoutes[currentPath as PageType]
                            : "View"}
                    </EventBreadCrumbLinks>
                )}
            </Breadcrumbs>
        </Container>
    );
};

export default EventBreadCrumb;
