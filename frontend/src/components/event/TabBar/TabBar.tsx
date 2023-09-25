import { Box, Button, Tab, Tabs } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const tabLabels = [
    "Event Details",
    "Ticket Pricing",
    "Exchange & Refund Policy",
    "Admission Policy",
    "Ways to Buy Tickets",
];

const TabBar = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "divider",
            }}
        >
            <Tabs aria-label="tab">
                {tabLabels.map((tabText: string, index: number) => (
                    <Tab key={tabText + index} label={tabText} />
                ))}
            </Tabs>

            <Button
                onClick={() => navigate(`/purchase/${id}`)}
                variant="outlined"
                sx={{ margin: "12px" }}
            >
                Buy Ticket
            </Button>
        </Box>
    );
};

export default TabBar;
