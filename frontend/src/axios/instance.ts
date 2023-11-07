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

const configureKeyCloakInstance = (
    type: "master" | "eztix",
    hasAdmin: boolean
) => ({
    baseURL: `http://keycloak-alb-427916872.ap-southeast-1.elb.amazonaws.com${
        hasAdmin ? "/admin" : ""
    }/realms/${type}`,
    setTimeout: 1000,
});

// Event microservice instances
export const eventInstance = axios.create(configureInstance("event", "event"));
export const prInstance = axios.create(
    configureInstance("purchase-request", "event")
);

// Order microservice instances
export const orderInstance = axios.create(configureInstance("order", "order"));
export const checkoutInstance = axios.create(
    configureInstance("checkout", "order")
);

// User Profile Keycloak service instance
export const userKeycloakService = axios.create(
    configureKeyCloakInstance("eztix", false)
);
export const adminTokenService = axios.create(
    configureKeyCloakInstance("master", false)
);
export const adminKeycloakService = axios.create(
    configureKeyCloakInstance("eztix", true)
);
