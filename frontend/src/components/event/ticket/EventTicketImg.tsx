import React from "react";
import QRCode from "../../../assets/illustrations/QRCode.png";
import { Box } from "@mui/material";

const EventTicketImg: React.FC = ({}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img src={QRCode} width="30%" style={{}} />
        </Box>
    );
};

export default EventTicketImg;
