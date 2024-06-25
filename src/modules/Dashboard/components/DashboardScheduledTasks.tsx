import React from "react";
import Table from "../../../components/GlobalComponents/Table/Table";
import useScheduledTasks from "../../../modules/ScheduledTasks.tsx/useScheduledTask";

function DashboardScheduledTasks() {
  const { rowData, columnData } = useScheduledTasks()
  return (
    <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
      <p className="text-primary text-wide font-Montserrat mb-3 font-semibold text-lg">
        Closed Tasks
      </p>
      <Table
        rowData={rowData}
        columnData={columnData}
      />
    </div>
  );
}

export default DashboardScheduledTasks;
