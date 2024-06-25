import { useForm } from "react-hook-form";
import GlobalDatePicker from "../../components/GlobalComponents/FormComponents/DatePicker";
import Dropdown from "../../components/GlobalComponents/FormComponents/Select";
import { StyledHeading } from "../../components/Typography/Typography";
import { FaDownload } from "react-icons/fa";

function Report() {
  const { register, control, watch } = useForm();

  return (
    <div className="px-3 lg:px-10 py-5 lg:py-12">
      <div className="bg-white px-4 py-3 sm:py-6 rounded-md shadow-customBoxShadow ">
        <StyledHeading>Reports</StyledHeading>

        <div className="flex gap-x-5">
          <Dropdown
            id="reportType"
            label="Report Type"
            placeholder="Select Report Type"
            selectObj={[
              { label: "PRM Reports", key: "PRM Reports" },
              { label: "Open Punch Points", key: "Open Punch Points" },
            ]}
            control={control}
            extraCss="!w-[24%]"
          />
          <GlobalDatePicker
            id="startDate"
            label="Select Start Date"
            control={control}
            showTimeInput={true}
            placeholder="Select Start Date"
            extraCss="!w-[24%]"
          />
          <GlobalDatePicker
            id="endDate"
            label="Select End Date"
            control={control}
            showTimeInput={true}
            placeholder="Select End Date"
            extraCss="!w-[24%]"
          />
          <div className="w-[24%] flex justify-end items-end">

          <button className="tracking-wide px-4 mb-0 sm:mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg bg-primary text-white  cursor-pointer flex items-center gap-x-2">
            <span className="text-sm sm:text-base">Download Reports</span>
            <FaDownload />
          </button>
          </div>
        </div>

        <p className="font-Montserrat font-bold text-lg text-primary tracking-wide mb-3 mt-5">
          Customized Duration Options :
        </p>
        <div className="flex">
          <button className="tracking-wide px-4 mb-0 sm:mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary  cursor-pointer flex items-center gap-x-2">
            <span className="text-sm sm:text-base">Today</span>
          </button>
          <button className="tracking-wide px-4 mb-0 sm:mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary  cursor-pointer flex items-center gap-x-2">
            <span className="text-sm sm:text-base">Last 3 Days</span>
          </button>
          <button className="tracking-wide px-4 mb-0 sm:mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary  cursor-pointer flex items-center gap-x-2">
            <span className="text-sm sm:text-base">Last 1 Week</span>
          </button>
          <button className="tracking-wide px-4 mb-0 sm:mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary  cursor-pointer flex items-center gap-x-2">
            <span className="text-sm sm:text-base">Last 1 Month</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Report;
