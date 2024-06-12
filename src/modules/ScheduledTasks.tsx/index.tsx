import Table from "../../components/GlobalComponents/Table/Table";
import { StyledHeading } from "../../components/Typography/Typography";
import useScheduledTasks from "./useScheduledTask";

function ScheduledTasks() {
  const { rowData, columnData } = useScheduledTasks();
  const shortlistedLength =
    sessionStorage.getItem("shortlistemItemsLength") !== null
      ? Number(sessionStorage.getItem("shortlistemItemsLength"))
      : 1;

  return (
    <div className="px-10 py-12">
      <div className="bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
        <StyledHeading css="!mb-0">Scheduled Tasks</StyledHeading>
      </div>
      <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
        <p className="text-primary text-wide text-base font-Montserrat mb-3">
          List of all Tasks
        </p>
        <Table
          rowData={rowData.slice(0, shortlistedLength)}
          columnData={columnData}
        />
      </div>
    </div>
  );
}

export default ScheduledTasks;