function useScheduledTasks() {
  const rowData = [
    {
      ticketID: "WFM001",
      id: 1,
      task: "PMT001",
      engineerName: "Rahul Gupta",
      engineerDomain: "Mobility",
      planStartDate: "2024-06-15",
      planEndDate: "2024-08-20",
      scheduleStatus: "Acknowledged",
    },
    {
      ticketID: "WFM002",
      id: 2,
      task: "PMT002",
      engineerName: "Rahul Gurujala",
      engineerDomain: "Fibre",
      planStartDate: "2024-06-20",
      planEndDate: "2024-08-20",
      scheduleStatus: "Pending",
    },
    {
      ticketID: "WFM003",
      id: 3,
      task: "PMT003",
      engineerName: "Rahul Kulthe",
      engineerDomain: "Transport",
      planStartDate: "2024-07-01",
      planEndDate: "2024-08-20",
      scheduleStatus: "Acknowledged",
    },
    {
      ticketID: "WFM004",
      id: 4,
      task: "PMT004",
      engineerName: "Subhash Ghosh",
      engineerDomain: "Enterprise",
      planStartDate: "2024-07-10",
      planEndDate: "2024-08-20",
      scheduleStatus: "Pending",
    },
    {
      ticketID: "WFM005",
      id: 5,
      task: "PMT005",
      engineerName: "Ashish Jha",
      engineerDomain: "Mobility",
      planStartDate: "2024-07-15",
      planEndDate: "2024-08-20",
      scheduleStatus: "Pending",
    },
  ];

  const columnData = [
    { field: "ticketID", headerName: "WFM Ticket ID ", flex: 1 },
    { field: "task", headerName: "Task", flex: 1 },
    { field: "engineerName", headerName: "Engineer Assigned", flex: 1 },
    { field: "engineerDomain", headerName: "Domain of Engineer", flex: 1 },
    { field: "planStartDate", headerName: "Plan Start Date", flex: 1 },
    { field: "planEndDate", headerName: "Plan End Date", flex: 1 },
    { field: "scheduleStatus", headerName: "Status ", flex: 1 },
  ];

  return { rowData, columnData };
}

export default useScheduledTasks;
