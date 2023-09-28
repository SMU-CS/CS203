import { Alert, AlertColor, Typography } from "@mui/material";
import { forwardRef } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { useSnackbar } from "notistack";
import { ReactNode } from "react";

interface MessageProps extends BoxProps {
    message: string;
}

interface BaseMessageProps extends MessageProps {
    type: AlertColor;
    icon: ReactNode;
}

const BaseMessage: React.FC<BaseMessageProps> = forwardRef(
    ({ message, id, icon, type }, ref) => {
        const { closeSnackbar } = useSnackbar();

        return (
            <Box
                ref={ref}
                sx={{ width: "100%", maxWidth: "500px", boxShadow: 5 }}
            >
                <Alert
                    icon={icon}
                    severity={type}
                    onClose={() => closeSnackbar(id)}
                >
                    <Typography variant="body2" fontWeight="bold">{message}</Typography>
                </Alert>
            </Box>
        );
    }
);

export default BaseMessage;
export type { MessageProps };
