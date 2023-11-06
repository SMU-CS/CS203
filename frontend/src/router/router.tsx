import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import EventListing from "../pages/public/EventListing";
import EventDetails from "../pages/public/EventDetails";
import PurchaseRequest from "../pages/public/PurchaseRequest";
import PurchaseRequestConfirmation from "../pages/public/PurchaseRequestConfirmation";
import ProfileDetails from "../pages/customer/ProfileDetails";
import ProfileDetailsCard from "../components/customer/ProfileDetailsCard/ProfileDetailsCard";
import OrderDetails from "../pages/customer/OrderDetails";
import FulfilPurchaseRequestPage from "../pages/order/FulfilPurchaseRequestPage";
import OrderConfirmation from "../pages/customer/OrderConfirmation";
import OrderPR from "../pages/customer/OrderPR";
import OrderHistory from "../pages/customer/OrderHistory";
import BaseRoute from "./routes/BaseRoute";
import Error404 from "./routes/Error404";
import ProtectedRoute from "./routes/ProtectedRoute";
import Checkout from "../pages/customer/Checkout";
import ViewTicketPage from "../pages/order/ViewTicketPage";
import ViewPurchaseRequest from "../pages/customer/ViewPurchaseRequest";

/**
    Creates a browser router with react-router-dom
    @returns { Router } returns a BrowserRouter
*/
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <BaseRoute>
                <Home />
            </BaseRoute>
        ),
        errorElement: <Error404 />,
    },
    {
        path: "event",
        element: (
            <BaseRoute>
                <EventListing />
            </BaseRoute>
        ),
    },
    {
        path: "event/:id",
        element: (
            <BaseRoute>
                <EventDetails />
            </BaseRoute>
        ),
    },
    {
        path: "purchase/:id",
        element: (
            <BaseRoute>
                <PurchaseRequest />
            </BaseRoute>
        ),
    },
    {
        path: "confirmation/:id",
        element: (
            <ProtectedRoute>
                <PurchaseRequestConfirmation />
            </ProtectedRoute>
        ),
    },
    {
        path: "orders",
        element: (
            <ProtectedRoute>
                <OrderDetails />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/orders/purchase-request",
                element: <OrderPR />,
            },
            {
                path: "/orders/history",
                element: <OrderHistory />,
            },
        ],
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <ProfileDetails />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/profile",
                element: <ProfileDetailsCard />,
            },
        ],
    },
    {
        path: "fulfil/:id",
        element: (
            <ProtectedRoute>
                <FulfilPurchaseRequestPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "order/:id",
        element: (
            <ProtectedRoute>
                <OrderConfirmation />
            </ProtectedRoute>
        ),
    },
    {
        path: "checkout/:id",
        element: (
            <ProtectedRoute>
                <Checkout />
            </ProtectedRoute>
        ),
    },
    {
        path: "view-ticket/:id",
        element: (
            <ProtectedRoute>
                <ViewTicketPage isRecurring={true} />
            </ProtectedRoute>
        ),
    },
    {
        path: "view-past-event/:id",
        element: (
            <ProtectedRoute>
                <ViewTicketPage isRecurring={false} />
            </ProtectedRoute>
        ),
    },
    {
        path: "view-purchase/:id",
        element: (
            <ProtectedRoute>
                <ViewPurchaseRequest />
            </ProtectedRoute>
        ),
    },
]);

export default router;
