import { useRef, useState } from "react";
import { rowTypes } from "./scheduling.types";
import toast from "react-hot-toast";
import SubmitButtonRenderer from "./components/SubmitButtonRenderer";
import TableIconRenderer from "./components/TableIconRenderer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRowDataAction, setShortlistedRowsAction } from "./scheduling.slice";
import { RootState } from "../../store";
import EngineerProfileRenderer from "./components/EngineerProfileRenderer";

function handleSortedDataBySiteId(data: rowTypes[]) {
  const sortedSiteIdOrder = data
    .map((value) => {
      return {
        siteId: value.siteId,
        trueCount: Object.values(value).filter((value) => value === true)
          .length,
      };
    })
    .sort((a, b) => b.trueCount - a.trueCount)
    .map((item) => item.siteId);

  let orderMap = new Map<number, number>(
    sortedSiteIdOrder.map((id, index) => [id, index])
  );

  return [...data].sort((a, b) => {
    const orderA = orderMap.get(a.siteId) ?? -1;
    const orderB = orderMap.get(b.siteId) ?? -1;
    return orderA - orderB;
  });
}

function useScheduling() {
  const [gridApi, setGridApi] = useState<any>(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const prevLengthRef = useRef(selectedRows.length);

  const { shortlistedRows, rowData } = useSelector(
    (state: RootState) => state.schedulingSlice
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const sortedRowData = handleSortedDataBySiteId(rowData);
  const sortedShortlistedData = handleSortedDataBySiteId(shortlistedRows)

  const columnData = [
    { field: "nssId", headerName: "NSS ID", flex: 1,  minWidth : 120 },
    { field: "siteType", headerName: "Site Type", flex: 1,  minWidth : 120 },
    { field: "lastTicketDate", headerName: "Tentative Start Date", flex: 1,  minWidth : 120 },
    {
      field: "currentTicketDate",
      headerName: "Tentative Current Date",
      flex: 1,
      minWidth : 120
    },
    { field: "totalTaskComplete", headerName: "Total Task Completed", flex: 1, minWidth : 120 },
    { field: "lastActivityDone", headerName: "Last Activity Date", flex: 1, minWidth : 120 },
    { field: "statusSchedule", headerName: "Status Schedule", flex: 1, minWidth : 120 },
    {
      field: "engineerAvailable",
      headerName: "Engineer Available",
      flex: 1,
      minWidth : 120,
      cellRenderer: EngineerProfileRenderer,
    },
    { field: "engineerDomain", headerName: "Engineer Domain", flex: 1, minWidth : 120 },
    {
      field: "alarm",
      headerName: "Alarm",
      cellRenderer: TableIconRenderer,
      cellRendererParams: {
        type: "alarm",
      },
      flex: 1,
      minWidth : 120
    },
    {
      field: "kpi",
      headerName: "KPI",
      cellRenderer: TableIconRenderer,
      cellRendererParams: {
        type: "kpi",
      },
      flex: 1,
      minWidth : 120
    },
    {
      field: "mansoon",
      headerName: "Mansoon",
      cellRenderer: TableIconRenderer,
      cellRendererParams: {
        type: "mansoon",
      },
      flex: 1,
      minWidth : 120
    },
    {
      field: "actions",
      headerName: "Action",
      autoHeight: true,
      cellRenderer: SubmitButtonRenderer,
      cellRendererParams: {
        rowData,
        getSelectedRows: () => selectedRows,
        onSubmit: (data: any) => handleRowSubmit(data),
        prevLength: prevLengthRef.current,
      },
      flex: 1.1,
      minWidth : 150
    },
  ];

  function handleShortlistedRowDelete(data: rowTypes) {
    toast.success("Row successfully removed");
    dispatch(setRowDataAction([...rowData, data]));
    dispatch(
      setShortlistedRowsAction(
        shortlistedRows.filter( 
          (value: rowTypes) => value.siteId !== data.siteId
        )
      )
    );
  }

  function handleRowSubmit(data: rowTypes) {
    if (
      shortlistedRows.find((value: rowTypes) => value.siteId === data.siteId)
    ) {
      toast.error("Row already shortlisted");
      return;
    }
    dispatch(
      setRowDataAction(
        rowData.filter((value: rowTypes) => value.siteId !== data.siteId)
      )
    );
    dispatch(setShortlistedRowsAction([...shortlistedRows, data]));
  }

  function handleScheduleTask() {
    navigate("/scheduled-tasks");
    sessionStorage.setItem(
      "shortlistemItemsLength",
      String(shortlistedRows.length)
    );
  }

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  const onSelectionChanged = () => {
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    if (prevLengthRef.current < selectedData.length) {
      prevLengthRef.current = selectedData.length;
    }
    setSelectedRows(selectedData);
  };

  const shortlistedRowsWithCheckboxEnabled = sortedShortlistedData.map((value) => {
    const newObj: Partial<rowTypes> = {};

    for (let key in value) {
      const typedKey = key as keyof rowTypes;

      if (value[typedKey] === "") {
        newObj[typedKey] = true as any;
      } else {
        newObj[typedKey] = value[typedKey] as any;
      }
    }

    return newObj;
  });

  return {
    sortedRowData,
    columnData,
    onGridReady,
    onSelectionChanged,
    sortedShortlistedData,
    shortlistedRowsWithCheckboxEnabled,
    handleShortlistedRowDelete,
    handleScheduleTask,
  };
}

export default useScheduling;
