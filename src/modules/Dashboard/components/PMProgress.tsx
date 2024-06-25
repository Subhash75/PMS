import { useState } from "react";
import Table from "../../../components/GlobalComponents/Table/Table";
import EngineerProfileRenderer from "../../../modules/Scheduling/components/EngineerProfileRenderer";
import TaskIDRendererer from "./TaskIDRendererer";
import { RiFileExcel2Line } from "react-icons/ri";

export function TicketStatusRenderer({ data }: any) {
  const { ticketAgingInDays } = data;

  return (
    <div className="flex justify-center items-center">
      {+ticketAgingInDays < 7 ? (
        <>
          &lt; 7
          <span className="text-green-500 rounded-full text-xl inline-block">
            &#8226;
          </span>
        </>
      ) : (
        <>
          &gt; 7
          <span className="text-red-500 rounded-full text-xl inline-block">
            &#8226;
          </span>
        </>
      )}
    </div>
  );
}

function PMProgress({
  handleChecklistDialog,
}: {
  handleChecklistDialog: () => void;
}) {
  const rowData = [
    {
      taskId: "T001",
      siteType: "Strategic",
      engineerAvailable: ["Rahul Gupta"],
      engineerDomain: "Mobility",
      nssid: "IDUW102180",
      taskStatus: "In Progress",
      startDate: "2023-06-01",
      endDate: "2023-06-10",
      zone: "Ghaziabad",
      subZone: "Indrapuram",
      ticketAgingInDays: "20",
    },
    {
      taskId: "T002",
      siteType: "Pre-Agg",
      engineerAvailable: ["Rahul Gurujala"],
      engineerDomain: "Transport",
      nssid: "IDUW102180",
      taskStatus: "Assigned",
      startDate: "2023-05-15",
      endDate: "2023-05-20",
      zone: "Ghaziabad",
      subZone: "Old Ghaziabad",
      ticketAgingInDays: "10",
    },
    {
      taskId: "T003",
      siteType: "Agg",
      engineerAvailable: ["Rahul Kulthe"],
      engineerDomain: "Transport",
      nssid: "IDUW103176",
      taskStatus: "Assigned",
      startDate: "2023-06-12",
      endDate: "2023-06-22",
      zone: "Ghaziabad",
      subZone: "Mohannagar",
      ticketAgingInDays: "13",
    },
    {
      taskId: "T004",
      siteType: "Strategic",
      engineerAvailable: ["Subhash Ghosh", "Rahul Kulthe"],
      engineerDomain: "Mobility",
      nssid: "IDUW103176",
      taskStatus: "In Progress",
      startDate: "2023-06-03",
      endDate: "2023-06-13",
      zone: "Ghaziabad",
      subZone: "Old Ghaziabad",
      ticketAgingInDays: "4",
    },
    {
      taskId: "T005",
      siteType: "Pre-Agg",
      engineerAvailable: ["Ashish Jha"],
      engineerDomain: "Transport",
      nssid: "IDUW101260",
      taskStatus: "Assigned",
      startDate: "2023-05-25",
      endDate: "2023-06-05",
      zone: "Ghaziabad",
      subZone: "Indrapuram",
      ticketAgingInDays: "25",
    },
  ];

  const columnData = [
    {
      field: "taskId",
      headerName: "Task ID",
      flex: 1,
      minWidth: 100,
      cellRenderer: TaskIDRendererer,
      cellRendererParams: {
        handleChecklistDialog,
      },
    },
    { field: "siteType", headerName: "Site Type", flex: 1, minWidth: 100 },
    {
      field: "engineerAvailable",
      headerName: "Engineer Assigned",
      flex: 1,
      minWidth: 100,
      cellRenderer: EngineerProfileRenderer,
    },
    {
      field: "engineerDomain",
      headerName: "Domain of Engineer",
      flex: 1,
      minWidth: 100,
    },
    { field: "nssid", headerName: "NSSID", flex: 1, minWidth: 100 },
    { field: "zone", headerName: "Zone", flex: 1, minWidth: 100 },
    { field: "subZone", headerName: "Sub Zone", flex: 1, minWidth: 100 },
    {
      field: "startDate",
      headerName: "Scheduled Start Date",
      flex: 1,
      minWidth: 100,
    },
    { field: "endDate", headerName: "End Date", flex: 1, minWidth: 100 },
    {
      field: "ticketAgingInDays",
      headerName: "Ticket Aging in Days",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "ticketStatus",
      headerName: "Ticket Status",
      flex: 1,
      minWidth: 100,
      cellRenderer: TicketStatusRenderer,
    },
    { field: "taskStatus", headerName: "Status", flex: 1, minWidth: 100 },
  ];

  const [gridApi, setGridApi] = useState<any>(null);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  const handleExcelExport = () => {
    gridApi.exportDataAsExcel();
  };

  return (
    <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
      <div className="flex justify-between">
        <p className="text-primary text-wide font-Montserrat mb-3 font-semibold text-lg">
          Ongoing Task Status
        </p>
        <button
          onClick={handleExcelExport}
          className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2"
        >
          Export <RiFileExcel2Line size={24} />
        </button>
      </div>
      <Table
        rowData={rowData}
        columnData={columnData}
        onGridReady={onGridReady}
      />
    </div>
  );
}

export default PMProgress;
