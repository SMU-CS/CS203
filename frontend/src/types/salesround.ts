export interface SalesRound extends SalesRoundAbstract {
    id: number;
    activity: string;
    purchaseStart: string;
    purchaseEnd: string;
}

export interface SalesRoundAbstract {
    roundStart: string;
    roundEnd: string;
    salesType: string;
}
