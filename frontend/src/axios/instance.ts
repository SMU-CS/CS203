import axios from "axios";

const configureInstance = (instanceUrl: string, withCredentials: boolean) => ({
    baseURL: `${
        import.meta.env.DEV
            ? import.meta.env.VITE_DEVELOPMENT_SERVER
            : import.meta.env.VITE_PRODUCTION_SERVER
    }/api/${import.meta.env.VITE_API_VERSION}/${instanceUrl}`,
    setTimeout: 1000,
    withCredentials: withCredentials,
});

export const eventInstance = axios.create(configureInstance("event", false));

// When authentication is done, switch the following APIs to use the withCredentials
export const salesRoundInstance = axios.create(
    configureInstance("salesround", false)
);
export const ticketTypeInstance = axios.create(
    configureInstance("ticket_type", false)
);
