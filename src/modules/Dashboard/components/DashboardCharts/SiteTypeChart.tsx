import "chart.js/auto";
import { Bar } from "react-chartjs-2";

function SiteTypeChart() {
  const data = {
    labels: ["Strategic", "Pre-Agg", "Agg", "Ran", "Ola"],
    datasets: [
      {
        label: "Engineers",
        data: [30, 20, 10, 40, 20],
        backgroundColor: [
          "#e40404",
          "#fcd5d2",
          "#FFC600",
          "lightblue",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Site Type",
          color: "red",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "No. of Engineers",
          color: "red",
        },
      },
    },
  };

  return (
    <div className="py-6">
      <p className="text-primary text-wide font-Montserrat mb-3 font-semibold text-lg">
        Site Type
      </p>
      <Bar data={data} options={options} className="!h-[400px] !w-full" />
    </div>
  );
}

export default SiteTypeChart;
