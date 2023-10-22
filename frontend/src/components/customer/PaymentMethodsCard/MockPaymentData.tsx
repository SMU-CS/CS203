import { CreditCard } from "../../../types/creditcard";

const mockPaymentsData: CreditCard[] = [
    {
        card_number: "1234 5678 9012 3456",
        card_name: "John Doe",
        cvv: "123",
        expiration_date: "12/25",
    },
    {
        card_number: "9876 5432 1098 7654",
        card_name: "Jane Smith",
        cvv: "456",
        expiration_date: "08/24",
    },
    {
        card_number: "5678 1234 5678 4321",
        card_name: "Alice Johnson",
        cvv: "789",
        expiration_date: "03/27",
    },
];

export default mockPaymentsData;
