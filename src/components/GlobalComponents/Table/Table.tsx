import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./Table.css";
import { useMemo } from "react";

function Table({
  rowData = [],
  columnData = [],
  onGridReady,
  onSelectionChanged,
}: {
  rowData: Array<object>;
  columnData: Array<object>;
  onGridReady?: (params: any) => void;
  onSelectionChanged?: (params: any) => void;
}) {
  return (
    <div className="ag-theme-quartz">
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}
        columnDefs={columnData}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50]}
        rowSelection="multiple"
        domLayout="autoHeight"
        onSelectionChanged={onSelectionChanged}
        rowHeight={50}
        suppressRowClickSelection={true}
      />
    </div>
  );
}

export default Table;
