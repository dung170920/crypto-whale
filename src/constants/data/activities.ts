import { Activity, ActivityStatus, TransactionType } from "@/types";
import { faker } from "@faker-js/faker";

const newActivity = (): Activity => {
  return {
    coin: faker.finance.currencyCode(),
    transaction: {
      amount: parseFloat(faker.finance.amount()),
      type: faker.helpers.enumValue(TransactionType),
    },
    date: faker.date.recent(),
    id: `#${faker.string.numeric({ length: 8 })}`,
    fee: parseFloat(faker.finance.amount()),
    status: faker.helpers.enumValue(ActivityStatus),
  };
};

export function makeData(length: number) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const activity = newActivity();
    arr.push(activity);
  }
  return arr;
}
