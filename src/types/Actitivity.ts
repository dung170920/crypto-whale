import { Transaction } from "@/types";

export enum ActivityStatus {
  pending,
  declined,
  completed,
}

export type Activity = {
  coin: string;
  transaction: Transaction;
  id: string;
  date: Date;
  status: ActivityStatus;
  fee: number;
};
