import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PublicRoute from "./routes/PublicRoute";
import Login from "../pages/public/Login";
import EventListing from "../pages/public/EventListing";
import EventDetails from "../pages/public/EventDetails";
import PurchaseRequest from "../pages/public/PurchaseRequest";
import PurchaseRequestConfirmation from "../pages/public/PurchaseRequestConfirmation";
import ProfileDetails from "../pages/customer/ProfileDetails";
import ChangePasswordCard from "../components/customer/ChangePasswordCard/ChangePasswordCard";
import PaymentMethodsCard from "../components/customer/PaymentMethodsCard/PaymentMethodsCard";
import ProfileDetailsCard from "../components/customer/ProfileDetailsCard/ProfileDetailsCard";
import OrderDetails from "../pages/customer/OrderDetails";
import FulfilPurchaseRequestPage from "../pages/order/FulfilPurchaseRequestPage";
import OrderConfirmation from "../pages/customer/OrderConfirmation";
import OrderPR from "../pages/customer/OrderPR";
import OrderHistory from "../pages/customer/OrderHistory";
import BaseRoute from "./routes/BaseRoute";
import Error404 from "./routes/Error404";
import ProtectedRoute from "./routes/ProtectedRoute";

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
                path: "",
                element: <ProfileDetailsCard />,
            },
            {
                path: "profiledetails",
                element: <ProfileDetailsCard />,
            },
            {
                path: "changepassword",
                element: <ChangePasswordCard />,
            },
            {
                path: "paymentmethods",
                element: <PaymentMethodsCard />,
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
]);

export default router;
