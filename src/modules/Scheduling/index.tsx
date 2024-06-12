import { Toaster } from "react-hot-toast";
import { IoAdd } from "react-icons/io5";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import Table from "../../components/GlobalComponents/Table/Table";
import { StyledHeading } from "../../components/Typography/Typography";
import RemoveButtonRenderer from "./components/RemoveButtonRenderer";
import useScheduling from "./useScheduling";

function Scheduling() {
  const {
    sortedRowData,
    columnData,
    onGridReady,
    onSelectionChanged,
    shortlistedRows,
    shortlistedRowsWithCheckboxEnabled,
    handleShortlistedRowDelete,
    handleScheduleTask,
  } = useScheduling();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-10 py-12">
        <div className="bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
          <StyledHeading css="!mb-0">Weekly Schedule</StyledHeading>
        </div>
        <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
          <p className="text-primary text-wide text-base font-Montserrat mb-3">
            List of schedules
          </p>
          <Table
            rowData={sortedRowData}
            columnData={columnData}
            onGridReady={onGridReady}
            onSelectionChanged={onSelectionChanged}
          />
        </div>
        <div className="mt-6 bg-white px-4 py-6 rounded-md shadow-customBoxShadow ">
          {shortlistedRows.length === 0 ? (
            <p className="h-48 flex justify-center items-center font-Montserrat tracking-wider text-3xl">
              Please select items to shortlist by clicking the{" "}
              <b className="tracking-wide px-3 py-3 mx-3 text-lg mt-[2px] font-Montserrat font-bold text-white border border-primary cursor-auto rounded-lg bg-primary flex items-center gap-x-2">
                Shortlist <MdOutlineBookmarkAdd size={20} />
              </b>
              button
            </p>
          ) : (
            <>
              <div className="flex justify-between items-center mb-2">
                <p className="text-primary text-wide text-base font-Montserrat mb-3">
                  Shortlisted Items
                </p>
                <button
                  className="tracking-wide p-2 mt-[2px] font-Montserrat font-bold border rounded-md border-primary text-primary cursor-pointer flex items-center gap-x-2"
                  onClick={handleScheduleTask}
                >
                  Schedule <IoAdd />
                </button>
              </div>
              <Table
                rowData={shortlistedRowsWithCheckboxEnabled}
                columnData={[
                  ...columnData.slice(0, columnData.length - 1),
                  {
                    field: "actions",
                    headerName: "Action",
                    autoHeight: true,
                    cellRenderer: RemoveButtonRenderer,
                    cellRendererParams: {
                      onSubmit: (data: any) => handleShortlistedRowDelete(data),
                    },
                    flex: 1.1,
                  },
                ]}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Scheduling;
