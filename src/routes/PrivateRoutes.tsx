import { path } from "@/constants";
import { Main } from "@/layouts";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const DashboardPage = lazy(() => import("@/pages/dashboard/Dashboard"));
const ExchangePage = lazy(() => import("@/pages/exchange/Exchange"));
const PricesPage = lazy(() => import("@/pages/prices/Prices"));
const WalletPage = lazy(() => import("@/pages/wallet/Wallet"));
const NFTPage = lazy(() => import("@/pages/nft/NFT"));
const TransactionPage = lazy(() => import("@/pages/transaction/Transaction"));
const BlogPage = lazy(() => import("@/pages/blog/Blog"));

const Authenticated = ({ children }: { children: React.ReactElement }) => {
  const auth = true;

  return auth ? children : <Navigate to={path.login} />;
};

export const PrivateRoutes: RouteObject[] = [
  {
    element: (
      <Authenticated>
        <Main />
      </Authenticated>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: path.exchange,
        element: <ExchangePage />,
      },
      {
        path: path.prices,
        element: <PricesPage />,
      },
      {
        path: path.wallet,
        element: <WalletPage />,
      },
      {
        path: path.nft,
        element: <NFTPage />,
      },
      {
        path: path.transaction,
        element: <TransactionPage />,
      },
      {
        path: path.blog,
        element: <BlogPage />,
      },
    ],
  },
];
