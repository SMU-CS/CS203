import axios from "axios";

const serversLocation = {
    development: {
        event: import.meta.env.VITE_DEVELOPMENT_EVENT_SERVER,
        order: import.meta.env.VITE_DEVELOPMENT_ORDER_SERVER,
    },
    production: {
        event: import.meta.env.VITE_PRODUCTION_EVENT_SERVER,
        order: import.meta.env.VITE_PRODUCTION_ORDER_SERVER,
    },
};

const configureInstance = (instanceUrl: string, server: "event" | "order") => ({
    baseURL: `${
        serversLocation[import.meta.env.DEV ? "development" : "production"][
            server
        ]
    }/api/${import.meta.env.VITE_API_VERSION}/${instanceUrl}`,
    setTimeout: 1000,
});

// Event microservice instances
export const eventInstance = axios.create(configureInstance("event", "event"));
export const prInstance = axios.create(
    configureInstance("purchase-request", "event")
);

// Order microservice instances
export const orderInstance = axios.create(configureInstance("order", "order"));
