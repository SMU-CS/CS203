import { adminTokenService } from "../instance";

import.meta.env.VITE_KEYCLOAK_USERNAME;

export const getAdminToken = async () => {
    try {
        const { data } = await adminTokenService.post(
            "/protocol/openid-connect/token",
            new URLSearchParams({
                client_id: "backdoor",
                username: import.meta.env.VITE_KEYCLOAK_USERNAME,
                password: import.meta.env.VITE_KEYCLOAK_PASSWORD,
                grant_type: "password",
            })
        );
        return data.access_token as string;
    } catch (e) {
        throw e;
    }
};
