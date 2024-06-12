// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import Table from "../../components/GlobalComponents/Table/Table";
// import { StyledHeading } from "../../components/Typography/Typography";
// import toast, { Toaster } from "react-hot-toast";

// const SubmitButtonRenderer = ({
//   getSelectedRows,
//   data,
//   onSubmit,
//   prevLength,
// }) => {
//   const isBtnEnabled = getSelectedRows().find(
//     (value) => value.siteId === data.siteId
//   );

//   const buttonTWClasses = isBtnEnabled
//     ? "border rounded-lg bg-[#e40404] cursor-pointer"
//     : "border rounded-lg bg-gray-200 cursor-not-allowed";

//   const handleClick = (e) => {
//     e.stopPropagation();
//     const rowData = data;
//     onSubmit(data);
//   };

//   useEffect(() => {
//     if (prevLength > getSelectedRows().length) {
//       if (getSelectedRows().find((value) => value.siteId === data.siteId)) {
//         onSubmit(data);
//         console.log(data);
//       }
//     }
//   }, [getSelectedRows().length]);

//   console.log({ all: getSelectedRows().length, ref: prevLength });

//   return (
//     <button
//       className={`tracking-wide px-3 mt-[2px] font-Montserrat font-bold text-white ${buttonTWClasses}`}
//       disabled={!isBtnEnabled}
//       onClick={handleClick}
//     >
//       Shortlist
//     </button>
//   );
// };

// function Scheduling() {
//   const [gridApi, setGridApi] = useState(null);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [shortlistedRows, setShortlistedRows] = useState([]);
//   const prevLengthRef = useRef(selectedRows.length);
//   console.log(prevLengthRef.current);

//   const [rowData, setRowData] = useState([
//     {
//       siteId: 1,
//       siteType: "Type A",
//       lastTicketDate: "2023-01-01",
//       currentTicketDate: "2024-01-01",
//       alarm: "",
//       kpi: "",
//       mansoon: "",
//       roster: "",
//       aer: "Value A",
//     },
//     {
//       siteId: 2,
//       siteType: "Type B",
//       lastTicketDate: "2023-02-01",
//       currentTicketDate: "2024-02-01",
//       alarm: "",
//       kpi: "",
//       mansoon: "",
//       roster: "",
//       aer: "Value B",
//     },
//     {
//       siteId: 3,
//       siteType: "Type C",
//       lastTicketDate: "2023-03-01",
//       currentTicketDate: "2024-03-01",
//       alarm: "",
//       kpi: "",
//       mansoon: "",
//       roster: "",
//       aer: "Value C",
//     },
//     {
//       siteId: 4,
//       siteType: "Type D",
//       lastTicketDate: "2023-04-01",
//       currentTicketDate: "2024-04-01",
//       alarm: "",
//       kpi: "",
//       mansoon: "",
//       roster: "",
//       aer: "Value D",
//     },
//     {
//       siteId: 5,
//       siteType: "Type E",
//       lastTicketDate: "2023-05-01",
//       currentTicketDate: "2024-05-01",
//       alarm: "",
//       kpi: "",
//       mansoon: "",
//       roster: "",
//       aer: "Value E",
//     },
//   ]);
//   const columnData = [
//     { field: "siteId", headerName: "Site ID", flex: 1 },
//     { field: "siteType", headerName: "Site Type", flex: 2 },
//     { field: "lastTicketDate", headerName: "Last PM Ticket Date", flex: 2 },
//     {
//       field: "currentTicketDate",
//       headerName: "Current PM Ticket Date",
//       flex: 2,
//     },
//     {
//       field: "alarm",
//       headerName: "Alarm",
//       checkboxSelection: true,
//       headerCheckboxSelection: true,
//       flex: 1,
//     },
//     {
//       field: "kpi",
//       headerName: "KPI",
//       checkboxSelection: true,
//       headerCheckboxSelection: true,
//       flex: 1,
//     },
//     {
//       field: "mansoon",
//       headerName: "Mansoon",
//       checkboxSelection: true,
//       headerCheckboxSelection: true,
//       flex: 1,
//     },
//     {
//       field: "roster",
//       headerName: "Roster",
//       checkboxSelection: true,
//       headerCheckboxSelection: true,
//       flex: 1,
//     },
//     { field: "aer", headerName: "AER", flex: 1 },
//     {
//       field: "actions",
//       headerName: "Action",
//       autoHeight: true,
//       cellRenderer: SubmitButtonRenderer, // Use the custom renderer
//       cellRendererParams: {
//         rowData: rowData,
//         getSelectedRows: () => selectedRows,
//         onSubmit: (data) => handleRowSubmit(data),
//         prevLength: prevLengthRef.current,
//       },
//       flex: 1,
//     },
//   ];

//   function handleRowSubmit(rowData) {
//     const abc = [...shortlistedRows, rowData];
//     console.log(abc);
//     if (shortlistedRows.find((value) => value.siteId === rowData.siteId)) {
//       console.log("first");
//       toast.error('Row already shortlisted');
//       return;
//     }
//     setShortlistedRows((prev) => [...prev, rowData]);
//   }

//   const onGridReady = (params) => {
//     setGridApi(params.api);
//   };

//   const onSelectionChanged = () => {
//     const selectedNodes = gridApi.getSelectedNodes();
//     const selectedData = selectedNodes.map((node) => node.data);
//     if (prevLengthRef.current < selectedData.length) {
//       prevLengthRef.current = selectedData.length;
//     }
//     setSelectedRows(selectedData);
//   };

//   const shortlistedColumns = columnData.map((value) => {
//     const { checkboxSelection, headerCheckboxSelection, ...rest } = value;
//     return rest;
//   });

//   const shortlistedRowsWithCheckboxEnabled = shortlistedRows.map((value) => {
//     const newObj = {};

//     for (let key in value) {
//       if (value[key] === "") {
//         newObj[key] = true;
//       } else {
//         newObj[key] = value[key];
//       }
//     }

//     return newObj;
//   });

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />
//       <div className="px-10 py-12">
//         <div className="bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
//           <StyledHeading css="!mb-0">Scheduling</StyledHeading>
//         </div>
//         <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
//           <p className="text-primary text-wide text-base font-Montserrat mb-3">
//             List of schedules
//           </p>
//           <Table
//             rowData={rowData}
//             columnData={columnData}
//             onGridReady={onGridReady}
//             onSelectionChanged={onSelectionChanged}
//           />
//         </div>
//         <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
//           {shortlistedRows.length === 0 ? (
//             <p className="h-48 flex justify-center items-center font-Montserrat tracking-wider text-3xl">
//               Use the checkboxes above to shortlist values.
//             </p>
//           ) : (
//             <>
//               <p className="text-primary text-wide text-base font-Montserrat mb-3">
//                 Shortlisted Items
//               </p>
//               <Table
//                 rowData={shortlistedRowsWithCheckboxEnabled}
//                 columnData={shortlistedColumns.slice(
//                   0,
//                   shortlistedColumns.length - 1
//                 )}
//               />
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Scheduling;
