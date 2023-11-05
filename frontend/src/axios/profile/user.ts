import { ProfileForm } from "../../types/profile";
import { adminKeycloakService } from "../instance";
import { getAdminToken } from "./adminToken";
import { enqueueSnackbar } from "notistack";

export const updateUserProfile = async (profileData: ProfileForm) => {
    try {
        const token = await getAdminToken();
        const {
            email,
            first_name,
            last_name,
            contact,
            country,
            date_of_birth,
            postal_code,
            id,
        } = profileData;
        const { status } = await adminKeycloakService.put(
            `/users/${id}`,
            {
                email: email,
                firstName: first_name,
                lastName: last_name,
                attributes: {
                    contact_number: [contact],
                    country: [country],
                    date_of_birth: [date_of_birth.toISOString()],
                    postal_code: [postal_code],
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (status === 204) {
            enqueueSnackbar("Profile has been updated successfully", {
                variant: "success",
            });
        }
    } catch (e) {
        throw e;
    }
};
