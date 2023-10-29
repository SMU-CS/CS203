import axios from "axios";

const configureInstance = (instanceUrl: string) => ({
    baseURL: `${
        import.meta.env.DEV
            ? import.meta.env.VITE_DEVELOPMENT_SERVER
            : import.meta.env.VITE_PRODUCTION_SERVER
    }/api/${import.meta.env.VITE_API_VERSION}/${instanceUrl}`,
    setTimeout: 1000,
});

export const eventInstance = axios.create(configureInstance("event"));
export const prInstance = axios.create(configureInstance("purchase-request"));

// When authentication is done, switch the following APIs to use the withCredentials
export const salesRoundInstance = axios.create(configureInstance("salesround"));
export const ticketTypeInstance = axios.create(
    configureInstance("ticket_type")
);
