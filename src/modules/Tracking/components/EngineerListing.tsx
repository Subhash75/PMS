import { CiSearch } from "react-icons/ci";
import { engineerData } from "../tracking.constants";
import { coordinatesTypes } from "../tracking.types";
import IndividualEngineerDetail from "./IndividualEngineerDetail";

function EngineerListing({
  handleEngineerFocus,
}: {
  handleEngineerFocus: ({latitude, longitude}: coordinatesTypes) => void;
}) {
  return (
    <div className="fixed z-[1000] left-10 top-[80px] bottom-10 overflow-hidden bg-white shadow-customBoxShadow bg-opacity-70 rounded-lg">
      <div className="border-b border-gray-300 bg-white px-5 py-3 rounded-tl-lg rounded-tr-lg">
        <div className="flex justify-between items-center">
          <h3 className="font-Montserrat text-primary text-2xl tracking-wide font-semibold ">
            Details
          </h3>
        </div>
      </div>
      <div className="bg-white py-5 px-3">
        <div className=" border border-gray-400 rounded-lg flex items-center px-2 py-3">
          <CiSearch size={25} className="text-primary" />
          <input
            className="w-full border-0 outline-0 hover:border-0 hover:outline-0 ml-2 font-Montserrat"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="h-full overflow-auto pb-[150px]">
        {engineerData.map((value, index) => (
          <IndividualEngineerDetail key={index} data={value} index={index} handleEngineerFocus={handleEngineerFocus} />
        ))}
      </div>
    </div>
  );
}

export default EngineerListing;
