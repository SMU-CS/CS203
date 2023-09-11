import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./assets/fonts/fonts.css";
import theme from "./assets/theme/defaultTheme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Optional: Apply global CSS reset */}
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
