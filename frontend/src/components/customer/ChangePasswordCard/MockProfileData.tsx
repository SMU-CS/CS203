import { profile } from "../../../types/profile";

const mockProfileData: profile[] = [
    {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        contact: "+1 (123) 456-7890",
        date_of_birth: "1990-05-15",
        country: "United States",
        postal_code: "12345",
        password: "12345678",
    },
    {
        id: 2,
        first_name: "Alice",
        last_name: "Smith",
        email: "alice.smith@example.com",
        contact: "+44 20 1234 5678",
        date_of_birth: "1985-08-22",
        country: "United Kingdom",
        postal_code: "SW1A 1AA",
        password: "12345678",
    },
    {
        id: 3,
        first_name: "Maria",
        last_name: "Garcia",
        email: "maria.garcia@example.com",
        contact: "+34 91 234 5678",
        date_of_birth: "1995-03-10",
        country: "Spain",
        postal_code: "28001",
        password: "12345678",
    },
];

export default mockProfileData;
