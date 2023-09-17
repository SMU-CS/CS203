import { Box, List, ListItem } from "@mui/material";

const policies = [
    "Admission to show/venue by full ticket only. Printed/electronic tickets must be produced for admission.",
    "There will be no admission for infants in arms and children below 3 years old.",
    "Individuals aged 3 years old and above will be required to purchase a ticket for admission.",
    "Please note that if you are children under 12 years old by date of birth, you are not allowed into the standing pen areas due to safety reasons.",
    "Please note that if you are individual with height below 1.2 meters, you are not allowed into the standing pen areas due to safety reasons",
    "No photography, videography and social media live streaming allowed.",
    "No outside food and beverage are allowed into the venue..⁠",
];

const EventAdmissionPolicy = () => {
    return (
        <Box
            sx={{
                fontSize: "1rem",
                fontFamily: "Lato",
            }}
        >
            <List
                sx={{
                    listStyleType: "disc",
                    pl: 4,
                    "& .MuiListItem-root": { display: "list-item" },
                }}
            >
                {policies.map((policy: string) => (
                    <ListItem>{policy}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default EventAdmissionPolicy;
