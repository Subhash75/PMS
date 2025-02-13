import { useState } from "react";
import Table from "../../components/GlobalComponents/Table/Table";
import { StyledHeading } from "../../components/Typography/Typography";

import { RiFileExcel2Line } from "react-icons/ri";

function Inventory() {
  const [rowData, setRowData] = useState([
    {
      nssid: "IDUW102180",
      siteType: "RAN",
      zone: "ID_DEHRADUN",
      nodeCount: "3",
      frequency: "2",
      completion: "8/3/2024",
      completedDate: "2/1/2024",
      equipmentType: "",
      equipmentCount: "5",
    },
    {
      nssid: "IDUW102180",
      siteType: "Pre-Agg",
      zone: "ID_DEHRADUN",
      nodeCount: "3",
      frequency: "2",
      completion: "8/3/2024",
      completedDate: "2/1/2024",
      equipmentType: "",
      equipmentCount: "4",
    },
    {
      nssid: "IDUW103176",
      siteType: "OLA",
      zone: "ID_RUDRAPUR",
      nodeCount: "3",
      frequency: "2",
      completion: "8/3/2024",
      completedDate: "2/1/2024",
      equipmentType: "",
      equipmentCount: "4",
    },
    {
      nssid: "IDUW103176",
      siteType: "OLA",
      zone: "ID_RUDRAPUR",
      nodeCount: "3",
      frequency: "2",
      completion: "11/9/2023",
      completedDate: "5/8/2024",
      equipmentType: "",
      equipmentCount: "4",
    },
    {
      nssid: "IDUW101260",
      siteType: "Pre-Agg",
      zone: "ID_RUDRAPUR",
      nodeCount: "3",
      frequency: "2",
      completion: "8/3/2024",
      completedDate: "2/1/2024",
      equipmentType: "",
      equipmentCount: "4",
    },
  ]);

  const [columnData, setColumnDefs] = useState([
    { field: "nssid", headerName: "NSSID", flex: 1, minWidth: 150 },
    { field: "siteType", headerName: "Site Type", flex: 1, minWidth: 150 },
    { field: "zone", headerName: "Zone", flex: 1, minWidth: 150 },
    { field: "nodeCount", headerName: "Node Count", flex: 1, minWidth: 150 },
    { field: "frequency", headerName: "Frequency", flex: 1, minWidth: 150 },
    {
      field: "completion",
      headerName: "Last Activity Date",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "completedDate",
      headerName: "Completed Date",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "equipmentCount",
      headerName: "Equipment Count",
      flex: 1,
      minWidth: 150,
    },
  ]);

  const [gridApi, setGridApi] = useState<any>(null);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };
  const onSelectionChanged = () => {
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    console.log("Selected Data:", selectedData);
  };

  return (
    <div className="px-3 lg:px-10 py-5 lg:py-12">
      <div className="bg-white px-4 py-3 sm:py-6 rounded-md shadow-customBoxShadow ">
        <StyledHeading css="!mb-0">Master Inventory</StyledHeading>
      </div>
      <div className="mt-4 sm:mt-6 bg-white px-3 sm:px-4 py-3 sm:py-6 rounded-md shadow-customBoxShadow ">
        <div className="flex justify-between items-center">
          <p className="text-primary text-wide text-sm sm:text-base font-Montserrat mb-3">
            List of sites
          </p>
          <button className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2">
            Export <RiFileExcel2Line size={24} />
          </button>
        </div>
        <Table
          rowData={rowData}
          columnData={columnData}
          onGridReady={onGridReady}
          onSelectionChanged={onSelectionChanged}
        />
      </div>
    </div>
  );
}

export default Inventory;
