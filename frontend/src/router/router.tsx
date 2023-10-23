import { createBrowserRouter } from "react-router-dom";
import App from "../App";
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
          path: "orders",
          element: (
              <PublicRoute>
                  <OrderDetails />
                </PublicRoute>
          ),
         children: [
            {
                path:"/orders/purchase-request",
                element: <OrderPR />
            },
            {
                path:"/orders/history",
                element: <OrderHistory />
            }
        ]
    },
    {
        path: "/profile/:id/*",
        element: (
            <PublicRoute>
                <ProfileDetails />
            </PublicRoute>
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
            <PublicRoute>
                <FulfilPurchaseRequestPage />
            </PublicRoute>
        ),
    },
    {
        path: "order/:id",
        element: (
            <PublicRoute>
                <OrderConfirmation />
            </PublicRoute>
        ),
    },
]);

export default router;
