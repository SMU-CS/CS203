import WarningIcon from "@mui/icons-material/Warning";
import BaseMessage, { MessageProps } from "./BaseMessage";
import { forwardRef } from "react";

const ErrorMessage = forwardRef<HTMLDivElement, MessageProps>(
    ({ message, id }, ref) => {
        return (
            <BaseMessage
                ref={ref}
                message={message}
                icon={<WarningIcon fontSize="inherit" />}
                id={id}
                type="error"
            />
        );
    }
);

export default ErrorMessage;
