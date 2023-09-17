import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import theme from "./assets/theme/defaultTheme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Footer from "./components/common/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
            <Footer />
        </ThemeProvider>
    </React.StrictMode>
);
