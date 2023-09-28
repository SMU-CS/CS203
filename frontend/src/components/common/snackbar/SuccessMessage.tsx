import SuccessIcon from "@mui/icons-material/Done";
import BaseMessage, { MessageProps } from "./BaseMessage";
import { forwardRef } from "react";

const SuccessMessage = forwardRef<HTMLDivElement, MessageProps>(
    ({ message, id }, ref) => {
        return (
            <BaseMessage
                ref={ref}
                message={message}
                icon={<SuccessIcon fontSize="inherit" />}
                id={id}
                type="success"
            />
        );
    }
);

export default SuccessMessage;
