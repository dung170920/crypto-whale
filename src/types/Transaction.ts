export enum TransactionType {
  deposit,
  withdraw,
  tranfer,
}

export type Transaction = {
  amount: number;
  type: TransactionType;
};
