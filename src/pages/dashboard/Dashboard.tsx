import { Activities, Balance, BaseStats, Chart, Prices, QuickExchange } from "./components";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-5 overflow-hidden">
        <div className="w-2/3">
          <BaseStats />
          <Chart />
          <Activities />
        </div>
        <div className="flex flex-col w-1/3">
          <Balance />
          <QuickExchange />
        </div>
      </div>
      <Prices />
    </>
  );
};

export default Dashboard;
