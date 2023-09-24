import { Box, Typography } from "@mui/material";

interface EventDescriptionType {
    children?: string;
}

const EventDescription: React.FC<EventDescriptionType> = ({ children }) => {
    return (
        <Box>
            <Typography
                fontSize={"1rem"}
                fontFamily={"Lato"}
                paddingTop={"1rem"}
                paddingBottom={"1rem"}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default EventDescription;
