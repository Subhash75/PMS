import { BsFillTelephoneFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import EngineerImg from "../../../../../assets/images/businessman_avatar.png";

function DriverTooltip() {
  return (
    <div className="bg-white w-64 mt-5 relative">
      <div className="flex gap-5">
        <img
          src={EngineerImg}
          alt="businessman_logo"
          className="w-10 h-10 rounded-full"
        />
        <div className="">
          <p
            className="font-Montserrat font-semibold text-lg"
            style={{ margin: 0 }}
          >
            Subhash Ghosh
          </p>
          <p style={{ margin: 0 }}>Field Engineer</p>
        </div>
        <BsFillTelephoneFill
          size={25}
          className="absolute right-0 top-2 text-primary cursor-pointer"
        />
      </div>
      <div className="mt-3 flex justify-between">
        <div className="flex items-center gap-2">
          <p style={{ margin: 0 }}>Active</p>
          <GoDotFill size={20} className="text-green-500" />
        </div>
      </div>
    </div>
  );
}

export default DriverTooltip;
