import { Dayjs } from "dayjs";

export interface Profile extends ProfileAbstract {
    date_of_birth: string;
}

export interface ProfileForm extends ProfileAbstract {
    date_of_birth: Dayjs;
}

interface ProfileAbstract {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    contact: string;
    country: string;
    postal_code: string;
    password: string;
}
