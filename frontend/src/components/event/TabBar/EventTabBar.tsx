import { Paper, Button, Tab, Tabs } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const tabLabels = [
    { label: "Event Details", hash: "description" },
    { label: "Ticket Pricing", hash: "pricing" },
    { label: "Exchange & Refund Policy", hash: "exchange" },
    { label: "Admission Policy", hash: "admission" },
    { label: "Ways to Buy Tickets", hash: "ways" },
];

export type EventTabsType =
    | "description"
    | "pricing"
    | "exchange"
    | "admission"
    | "ways";

interface EventTabBarProps {
    active: EventTabsType;
}

const EventTabBar: React.FC<EventTabBarProps> = ({ active }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <Paper
            elevation={4}
            sx={{
                top: { xs: "63px", sm: "66px", md: "70px" },
                height: "4rem",
                zIndex: 1100,
                position: "sticky",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Tabs
                sx={{
                    height: "100%",
                }}
                value={active}
                variant="scrollable"
                aria-label="tab"
            >
                {tabLabels.map(({ hash, label }) => (
                    <Tab
                    sx={{
                        top: 10,
                    }}
                        value={hash}
                        key={hash}
                        href={`#${hash}`}
                        label={label}
                    />
                ))}
            </Tabs>

            <Button
                onClick={() => navigate(`/purchase/${id}`)}
                variant="outlined"
                sx={{ whiteSpace: "nowrap", mr: "12px" }}
            >
                Buy Ticket
            </Button>
        </Paper>
    );
};

export default EventTabBar;
