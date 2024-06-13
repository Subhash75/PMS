import EngineerProfileRenderer from "../../../modules/Scheduling/components/EngineerProfileRenderer";
import Table from "../../../components/GlobalComponents/Table/Table";

function PMProgress() {
  const rowData = [
    {
      taskId: "T001",
      engineerAvailable: ["Rahul Gupta"],
      engineerDomain: "MW",
      taskStatus: "In Progress",
      startDate: "2023-06-01",
      endDate: "2023-06-10"
    },
    {
      taskId: "T002",
      engineerAvailable: ["Rahul Gurujala"],
      engineerDomain: "Optics",
      taskStatus: "Completed",
      startDate: "2023-05-15",
      endDate: "2023-05-20"
    },
    {
      taskId: "T003",
      engineerAvailable: ["Rahul Kulthe"],
      engineerDomain: "RAN",
      taskStatus: "Not Started",
      startDate: "2023-06-12",
      endDate: "2023-06-22"
    },
    {
      taskId: "T004",
      engineerAvailable: ["Subhash Ghosh","Rahul Kulthe"],
      engineerDomain: "RAN",
      taskStatus: "In Progress",
      startDate: "2023-06-03",
      endDate: "2023-06-13"
    },
    {
      taskId: "T005",
      engineerAvailable: ["Ashish Jha"],
      engineerDomain: "Optics",
      taskStatus: "Completed",
      startDate: "2023-05-25",
      endDate: "2023-06-05"
    }
  ];
  

  const columnData = [
    { field: "taskId", headerName: "Task ID", flex: 1, minWidth : 100 },
    { field: "engineerAvailable", headerName: "Engineer Assigned", flex: 1, minWidth : 100, cellRenderer: EngineerProfileRenderer },
    { field: "engineerDomain", headerName: "Domain of Engineer", flex: 1, minWidth : 100 },
    { field: "startDate", headerName: "Start Date", flex: 1, minWidth : 100 },
    { field: "endDate", headerName: "End Date", flex: 1, minWidth : 100 },
    { field: "taskStatus", headerName: "Status", flex: 1, minWidth : 100 },
  ];
  return (
    <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
      <p className="text-primary text-wide font-Montserrat mb-3 font-semibold text-lg">
        Ongoing Task Status
      </p>
      <Table rowData={rowData} columnData={columnData} />
    </div>
  );
}

export default PMProgress;
