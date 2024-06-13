import EngineerProfileRenderer from "../Scheduling/components/EngineerProfileRenderer";

function useScheduledTasks() {
  const rowData = [
    {
      ticketID: "WFM001",
      id: 1,
      task: "PMT001",
      engineerAvailable: ["Rahul Gupta","Subhash Ghosh"],
      engineerDomain: "Mobility",
      planStartDate: "2024-06-15",
      planEndDate: "2024-08-20",
      scheduleStatus: "Acknowledged",
    },
    {
      ticketID: "WFM002",
      id: 2,
      task: "PMT002",
      engineerAvailable: ["Rahul Gurujala","Subhash Ghosh", "Rahul Kulthe"],
      engineerDomain: "Fibre",
      planStartDate: "2024-06-20",
      planEndDate: "2024-08-20",
      scheduleStatus: "Pending",
    },
    {
      ticketID: "WFM003",
      id: 3,
      task: "PMT003",
      engineerAvailable: ["Rahul Kulthe"],
      engineerDomain: "Transport",
      planStartDate: "2024-07-01",
      planEndDate: "2024-08-20",
      scheduleStatus: "Acknowledged",
    },
    {
      ticketID: "WFM004",
      id: 4,
      task: "PMT004",
      engineerAvailable: ["Subhash Ghosh"],
      engineerDomain: "Optics",
      planStartDate: "2024-07-10",
      planEndDate: "2024-08-20",
      scheduleStatus: "Pending",
    },
    {
      ticketID: "WFM005",
      id: 5,
      task: "PMT005",
      engineerAvailable: ["Ashish Jha"],
      engineerDomain: "Mobility",
      planStartDate: "2024-07-15",
      planEndDate: "2024-08-20",
      scheduleStatus: "Pending",
    },
  ];

  const columnData = [
    { field: "ticketID", headerName: "WFM Ticket ID ", flex: 1, minWidth : 150 },
    { field: "task", headerName: "Task", flex: 1, minWidth : 150 },
    { field: "engineerAvailable", headerName: "Engineer Assigned", flex: 1, minWidth : 150, cellRenderer: EngineerProfileRenderer },
    { field: "engineerDomain", headerName: "Domain of Engineer", flex: 1, minWidth : 150 },
    { field: "planStartDate", headerName: "Plan Start Date", flex: 1, minWidth : 150 },
    { field: "planEndDate", headerName: "Plan End Date", flex: 1, minWidth : 150 },
    { field: "scheduleStatus", headerName: "Status ", flex: 1, minWidth : 150 },
  ];

  return { rowData, columnData };
}

export default useScheduledTasks;
