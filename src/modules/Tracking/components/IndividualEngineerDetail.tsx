import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function DriverDataChips({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex w-full justify-between">
      <h6 className="font-Montserrat w-[30%]">{title}</h6>
      <p className="w-[1%]">:</p>
      <p className="w-[55%] font-Montserrat font-bold">{value}</p>
    </div>
  );
}

function IndividualEngineerDetail({ data, index, handleEngineerFocus }: any) {
  const [isShrink, setIsShrink] = useState(index === 0 ? false : true);

  const handleToggle = () => {
    setIsShrink((prevValue) => !prevValue);
  };

  return (
    <div className="border-b bg-white border-gray-300 px-5  py-3 relative cursor-pointer rounded-bl-lg rounded-br-lg">
      <h6
        className="font-Montserrat tracking-wider font-semibold text-xl text-primary"
        onClick={handleToggle}
      >
        {data.name}
      </h6>
      <p className="absolute top-3 right-6" onClick={handleToggle}>
        {isShrink ? (
          <MdKeyboardArrowDown size={30} className="text-primary" />
        ) : (
          <MdOutlineKeyboardArrowUp size={30} className="text-primary" />
        )}
      </p>

      <div
        className={`flex flex-wrap items-center content-start gap-4 w-72 flex-col ${
          isShrink ? "mt-0" : "mt-4"
        }`}
        style={{
          maxHeight: isShrink ? "0" : "1000px",
          overflow: "hidden",
          transition:
            "max-height 0.5s ease-in-out,  margin-top 0.5s ease-in-out",
        }}
      >
        <DriverDataChips title="Task ID" value={data.taskId} />
        <DriverDataChips title="NSS ID" value={data.nssid} />
        <DriverDataChips title="Zone" value={data.zone} />
        <DriverDataChips title="Domain" value={data.domain} />
        <DriverDataChips title="Site Type" value={data.siteType} />
        <button
          onClick={() =>
            handleEngineerFocus({
              latitude: data.latitude,
              longitude: data.longitude,
            })
          }
          className="w-full flex justify-center items-center gap-x-2 rounded-lg py-3 font-Montserrat border text-lg font-semibold tracking-wider border-primary hover:text-primary hover:bg-white bg-primary text-white "
        >
          Locate
          <CiLocationOn size={24} />
        </button>
      </div>
    </div>
  );
}

export default IndividualEngineerDetail;
