import { useState } from "react";
import Table from "../../components/GlobalComponents/Table/Table";
import { StyledHeading } from "../../components/Typography/Typography";

function Inventory() {
  const [rowData, setRowData] = useState([
    {
      nssid: 'IDUW102180',
      siteType: "RAN",
      zone: 'ID_DEHRADUN',
      nodeCount: '3',
      frequency: '2',
      completion: '8/3/2024',
      completedDate: '2/1/2024',
      equipmentType: '',
      equipmentCount: '5'
    },
    {
      nssid: 'IDUW102180',
      siteType: "MICROWAVE",
      zone: 'ID_DEHRADUN',
      nodeCount: '3',
      frequency: '2',
      completion: '8/3/2024',
      completedDate: '2/1/2024',
      equipmentType: '',
      equipmentCount: '4'
    },
    {
      nssid: 'IDUW103176',
      siteType: "MICROWAVE",
      zone: 'ID_RUDRAPUR',
      nodeCount: '3',
      frequency: '2',
      completion: '8/3/2024',
      completedDate: '2/1/2024',
      equipmentType: '',
      equipmentCount: '4'
    },
    {
      nssid: 'IDUW103176',
      siteType: "MICROWAVE",
      zone: 'ID_RUDRAPUR',
      nodeCount: '3',
      frequency: '2',
      completion: '11/9/2023',
      completedDate: '5/8/2024',
      equipmentType: '',
      equipmentCount: '4'
    },
    {
      nssid: 'IDUW101260',
      siteType: "Pre-Agg",
      zone: 'ID_RUDRAPUR',
      nodeCount: '3',
      frequency: '2',
      completion: '8/3/2024',
      completedDate: '2/1/2024',
      equipmentType: '',
      equipmentCount: '4'
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [columnData, setColumnDefs] = useState([
    // {
    //   field: "function",
    //   flex: 1,
    //   // checkboxSelection: true,
    //   filter: "agTextColumnFilter",
    // },
    { field: "nssid", headerName: "NSSID", flex: 1 },
    { field: "siteType", headerName: "Site Type", flex: 1 }, 
    { field: "zone", headerName: "Zone", flex: 1 },
    { field: "nodeCount", headerName: "Node Count", flex: 1 }, 
    { field: "frequency", headerName: "Frequency", flex: 1 }, 
    { field: "completion", headerName: "Last Activity Date", flex: 1 }, 
    { field: "completedDate", headerName: "Completed Date", flex: 1 }, 
    { field: "equipmentCount", headerName: "Equipment Count", flex: 1 },
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
    <div className="px-10 py-12">
      <div className="bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
        <StyledHeading css="!mb-0">Master Inventory</StyledHeading>
      </div>
      <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
        <p className="text-primary text-wide text-base font-Montserrat mb-3">
          List of sites
        </p>
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
