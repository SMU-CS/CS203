import { Box, List, ListItem } from "@mui/material";

const pricing = [
    { ticketType: "Standard", category: "A", price: "50" },
    { ticketType: "Standard", category: "B", price: "20" },
];

const TicketPricing = () => {
    const ListStyle = {
        listStyleType: "disc",
        pl: 4,
        "& .MuiListItem-root": { display: "list-item" },
        fontSize: "1rem",
        lineHeight: "5px",
        left: "-1rem",
    };

    return (
        <Box sx={{ fontSize: "1rem", fontFamily: "Lato" }}>
            <List sx={ListStyle}>
                {pricing.map((Element) => (
                    <ListItem>
                        {Element.ticketType +
                            " - Cat." +
                            Element.category +
                            ": $" +
                            Element.price}
                    </ListItem>
                ))}
            </List>
            *You can only make a purchase request of maximum 4 tickets in total
            for each event, you are left with 4 tickets for this purchase
            request
        </Box>
    );
};

export default TicketPricing;
