import { Line } from "react-chartjs-2";

function PMCountGraph() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "PM Count",
        data: [1, 2, 3, 4, 2, 3, 4, 5, 3, 2, 1, 4],
        fill: false,
        backgroundColor: ["#e40404"],
        borderColor: ["#e40404"],
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
          text: "Months",
          color: "red",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "No. of PM",
          color: "red",
        },
        ticks: {
          min: 1,
          max: 5,
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className=" mt-6 bg-white px-4 py-6  rounded-md shadow-customBoxShadow ">
      <p className="text-primary text-wide font-Montserrat mb-3 font-semibold text-lg">
        Preventive Maintenance(Month wise)
      </p>
      <Line data={data} options={options} className="!h-[400px] !w-full" />
    </div>
  );
}

export default PMCountGraph;
