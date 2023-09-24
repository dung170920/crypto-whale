import { ApexOptions } from "apexcharts";
import classNames from "classnames";
import { useState } from "react";
import { default as ApexChart } from "react-apexcharts";

export const Chart = () => {
  const periods: { name: string; value: string }[] = [
    { name: "All", value: "all" },
    { name: "1M", value: "1m" },
    { name: "6M", value: "6m" },
    { name: "1Y", value: "1y" },
    { name: "YTD", value: "ytd" },
  ];
  const series = [
    {
      name: "series-1",
      data: [45, 52, 38, 45, 19, 23, 2],
    },
  ];
  const options: ApexOptions = {
    chart: {
      id: "line",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    colors: ["#0CAF60"],
    xaxis: {
      categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
    },
    dataLabels: {
      enabled: false,
    },
  };
  const [period, setPeriod] = useState("all");

  return (
    <div className="px-5 py-6">
      <div className="flex items-center justify-between mb-10">
        <h4 className="font-semibold">Portfolio Stats</h4>
        <div className="flex gap-3">
          {periods.map((e) => (
            <button
              onClick={() => setPeriod(e.value)}
              key={e.value}
              className={classNames(
                "text-xs border border-gray-600 rounded-xl w-10 py-2",
                e.value === period ? "bg-primary" : "bg-transparent hover:bg-gray-600"
              )}
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <ApexChart options={options} series={series} type="area" height={300} />
      </div>
    </div>
  );
};
