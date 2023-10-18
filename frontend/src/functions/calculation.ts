export const calcTicketPrice = (transactions: PurchaseRequestItem[]) => {
    return transactions.reduce((accumulator, purchase) => accumulator + purchase.price, 0 )
}

export const calcServiceFee = (transactions: PurchaseRequestItem[], serviceFee: number) => {
    return (calcTicketPrice(transactions) / 100) * serviceFee
}

export const calcTotalPrice = (transactions: PurchaseRequestItem[], serviceFee: number, facilityCharge: number) => {
    return calcTicketPrice(transactions) + calcServiceFee(transactions, serviceFee) + facilityCharge
}