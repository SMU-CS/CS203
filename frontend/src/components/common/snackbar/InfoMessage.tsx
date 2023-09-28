import InfoIcon from "@mui/icons-material/Error";
import BaseMessage, { MessageProps } from "./BaseMessage";
import { forwardRef } from "react";

const InfoMessage = forwardRef<HTMLDivElement, MessageProps>(
    ({ message, id }, ref) => {
        return (
            <BaseMessage
                ref={ref}
                message={message}
                icon={<InfoIcon fontSize="inherit" />}
                id={id}
                type="info"
            />
        );
    }
);

export default InfoMessage;
