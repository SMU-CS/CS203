import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PublicRoute from "./routes/PublicRoute";
import Login from "../pages/public/Login";
import Landing from "../pages/public/Landing";
import EventListing from "../pages/public/EventListing";
import EventDetails from "../pages/public/EventDetails";
import PurchaseRequest from "../pages/public/PurchaseRequest";
import PurchaseRequestConfirmation from "../pages/public/PurchaseRequestConfirmation";

/**
    Creates a browser router with react-router-dom
    @returns { Router } returns a BrowserRouter
*/
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            //for now use Home page to test components
            <PublicRoute>
                <Home />
            </PublicRoute>
        ),
        //errorElement: <Error404 />,
    },
    {
        path: "/App",
        element: <App />,
    },
    {
        path: "/Login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: "/Landing",
        element: (
            <PublicRoute>
                <Landing />
            </PublicRoute>
        ),
    },
    {
        path: "/EventListing",
        element: (
            <PublicRoute>
                <EventListing />
            </PublicRoute>
        ),
    },
    {
        path: "/EventDetails",
        element: (
            <PublicRoute>
                <EventDetails />
            </PublicRoute>
        ),
    },
    {
        path: "/PurchaseRequest",
        element: (
            <PublicRoute>
                <PurchaseRequest />
            </PublicRoute>
        ),
    },
    {
        path: "/PurchaseRequestConfirmation",
        element: (
            <PublicRoute>
                <PurchaseRequestConfirmation />
            </PublicRoute>
        ),
    },
]);

export default router;
