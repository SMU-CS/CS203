import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import theme from "./assets/theme/defaultTheme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Footer from "./components/common/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
            <Footer />
        </ThemeProvider>
    </React.StrictMode>
);
