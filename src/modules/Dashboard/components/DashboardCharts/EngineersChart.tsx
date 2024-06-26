import "chart.js/auto";
import { Bar } from "react-chartjs-2";

function EngineersChart() {
  const data = {
    labels: ["Old Ghaziabad", "Indrapuram", "Mohannagar"],
    datasets: [
      {
        label: "Engineers",
        data: [2, 1, 3],
        backgroundColor: ["#e40404", "#fcd5d2", "#FFC600"],
        borderWidth: 1,
        barThickness: 80,
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
          text: "Sub Zone",
          color: 'red',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "No. of Engineers",
          color: 'red',
        },
      },
    },
    ticks: {
      min: 0,
      max: 3,
      stepSize: 1,
    },
  };

  return (
    <div className="border-l py-6 border-black pl-5">
      <p className="text-primary text-wide font-Montserrat mb-3 font-semibold text-lg">
        Engineers Available
      </p>
      <Bar data={data} options={options} className="!h-[400px] !w-full" />
    </div>
  );
}

export default EngineersChart;
