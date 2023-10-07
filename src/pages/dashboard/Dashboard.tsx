import { Activities, Balance, BaseStats, Chart, Prices, QuickExchange } from "./components";

const Dashboard = () => {
  return (
    <section className="space-y-7">
      <div className="flex gap-5">
        <div className="w-2/3">
          <BaseStats />
          <Chart />
          <Activities />
        </div>
        <div className="w-1/3 flex flex-col">
          <Balance />
          <QuickExchange />
        </div>
      </div>
      <Prices />
    </section>
  );
};

export default Dashboard;
