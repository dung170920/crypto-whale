import { path } from "@/constants";

export const sideLinks = [
  {
    text: "Dashboard",
    to: path.home,
    icon: "grid-square",
    isNew: false,
  },
  {
    text: "Exchange",
    to: path.exchange,
    icon: "exchange-horizontal-circle",
    isNew: false,
  },
  {
    text: "Live prices",
    to: path.prices,
    icon: "trend-up-circle",
    isNew: false,
  },
  {
    text: "NFT Market",
    to: path.nft,
    icon: "store",
    isNew: true,
  },
  {
    text: "Transaction",
    to: path.transaction,
    icon: "activity-circle",
    isNew: false,
  },
  {
    text: "Blog",
    to: path.blog,
    icon: "document",
    isNew: false,
  },
];
