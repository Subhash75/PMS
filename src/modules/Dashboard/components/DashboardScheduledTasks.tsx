import { RiFileExcel2Line } from "react-icons/ri";
import Table from "../../../components/GlobalComponents/Table/Table";
import useScheduledTasks from "../../../modules/ScheduledTasks.tsx/useScheduledTask";

function DashboardScheduledTasks() {
  const { rowData, columnData } = useScheduledTasks();
  return (
    <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
      <div className="flex justify-between items-center">
        <p className="text-primary text-wide font-Montserrat mb-3 font-semibold text-lg">
          Closed Tasks
        </p>
        <button className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2">
          Export <RiFileExcel2Line size={24} />
        </button>
      </div>
      <Table rowData={rowData} columnData={columnData} />
    </div>
  );
}

export default DashboardScheduledTasks;
