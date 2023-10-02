import { Box, Button, Tab, TabProps, Tabs } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

interface TabBarProps extends TabProps {
    labels: string[];
    displayBuyTicketButton: boolean;
}

const TabBar: React.FC<TabBarProps> = ({ labels, displayBuyTicketButton }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <Box
            sx={{
                top: { xs: "63px", sm: "66px", md: "70px" },
                width: "100%",
                zIndex: 1100,
                position: "sticky",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "divider",
                bgcolor: "white",
            }}
        >
            <Tabs aria-label="tab">
                {labels.map((tabText: string, index: number) => (
                    <Tab key={tabText + index} label={tabText} />
                ))}
            </Tabs>

            {displayBuyTicketButton && (
                <Button
                    onClick={() => navigate(`/purchase/${id}`)}
                    variant="outlined"
                    sx={{ margin: "12px" }}
                >
                    Buy Ticket
                </Button>
            )}
        </Box>
    );
};

export default TabBar;
