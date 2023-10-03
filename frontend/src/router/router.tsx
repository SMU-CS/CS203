import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PublicRoute from "./routes/PublicRoute";
import Login from "../pages/public/Login";
import EventListing from "../pages/public/EventListing";
import EventDetails from "../pages/public/EventDetails";
import PurchaseRequest from "../pages/public/PurchaseRequest";
import PurchaseRequestConfirmation from "../pages/public/PurchaseRequestConfirmation";
import OrderConfirmation from "../pages/customer/OrderConfirmation";

/**
    Creates a browser router with react-router-dom
    @returns { Router } returns a BrowserRouter
*/
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PublicRoute>
                <Home />
            </PublicRoute>
        ),
        //errorElement: <Error404 />,
    },
    {
        path: "App",
        element: <App />,
    },
    {
        path: "Login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: "event",
        element: (
            <PublicRoute>
                <EventListing />
            </PublicRoute>
        ),
    },
    {
        path: "event/:id",
        element: (
            <PublicRoute>
                <EventDetails />
            </PublicRoute>
        ),
    },
    {
        path: "purchase/:id",
        element: (
            <PublicRoute>
                <PurchaseRequest />
            </PublicRoute>
        ),
    },
    {
        path: "confirmation/:id",
        element: (
            <PublicRoute>
                <PurchaseRequestConfirmation />
            </PublicRoute>
        ),
    },
    {
        path: "OrderConfirmation",
        element: (
            <PublicRoute>
                <OrderConfirmation />
            </PublicRoute>
        ),
    },
]);

export default router;
