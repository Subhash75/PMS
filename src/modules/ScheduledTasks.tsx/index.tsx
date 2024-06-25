import Table from "../../components/GlobalComponents/Table/Table";
import { StyledHeading } from "../../components/Typography/Typography";
import useScheduledTasks from "./useScheduledTask";

import { RiFileExcel2Line } from "react-icons/ri";

function ScheduledTasks() {
  const { rowData, columnData } = useScheduledTasks();
  const shortlistedLength =
    sessionStorage.getItem("shortlistemItemsLength") !== null
      ? Number(sessionStorage.getItem("shortlistemItemsLength"))
      : 1;

  return (
    <div className="px-3 lg:px-10 py-5 lg:py-12">
      <div className="bg-white px-4 py-3 sm:py-6 rounded-md shadow-customBoxShadow ">
        <StyledHeading css="!mb-0">Scheduled Tasks</StyledHeading>
      </div>
      <div className="mt-4 sm:mt-6 bg-white px-3 sm:px-4 py-3 sm:py-6 rounded-md shadow-customBoxShadow ">
        <div className="flex justify-between items-center">
          <p className="text-primary text-wide text-sm sm:text-base  font-Montserrat mb-3">
            List of all Tasks
          </p>
          <button className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2">
            Export <RiFileExcel2Line size={24} />
          </button>
        </div>
        <Table
          rowData={rowData.slice(0, shortlistedLength)}
          columnData={columnData}
        />
      </div>
    </div>
  );
}

export default ScheduledTasks;
