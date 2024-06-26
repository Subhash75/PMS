import { ChartData, ChartOptions } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function PunchPoints() {
  const data: ChartData<"doughnut"> = {
    labels: ["Open", "Closed"],
    datasets: [
      {
        label: "Status",
        data: [30, 70],
        backgroundColor: ["#e40404", "#FFC600"],
        borderColor: ["#fcd5d2", "yellow"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="p-3 font-Montserrat border-b w-full md:w-[50%] xl:w-full flex-shrink-0 flex flex-col justify-between xl:block border-l-2 xl:border-l-0">
      <h4 className=" font-semibold text-lg text-primary text-center xl:text-left">
        Punch Points
      </h4>
      <div className="flex justify-between items-center py-1 mt-3">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default PunchPoints;
