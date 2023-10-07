import { ApexOptions } from "apexcharts";
import { default as ApexChart } from "react-apexcharts";

export const Balance = () => {
  const series = [1920, 250, 160, 920];
  const options: ApexOptions = {
    labels: ["Bitcoin", "Waves", "Avax", "Ethereum"],
    colors: ["#674AFF", "#02C39A", "#FB774A", "#FFAA35"],
    tooltip: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    legend: { show: false },
    dataLabels: {
      enabled: false,
      style: {
        fontFamily: "'Poppins', sans-serif",
      },
    },

    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        donut: {
          size: "60%",
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: "Total",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
                return `$${sum}`;
              },
            },
          },
        },
      },
    },
  };

  return (
    <section className="p-6">
      <h4 className="font-semibold">Balance</h4>
      <div className="h-fit mt-14">
        <ApexChart series={series} options={options} type="donut" />
      </div>
      <div className="grid grid-cols-4">
        <ApexChart series={series} options={options} type="radialBar" />
        <ApexChart series={series} options={options} type="radialBar" />
        <ApexChart series={series} options={options} type="radialBar" />
        <ApexChart series={series} options={options} type="radialBar" />
      </div>
    </section>
  );
};
