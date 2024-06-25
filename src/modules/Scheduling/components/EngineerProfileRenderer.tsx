import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

const profileBgColor = (index: number) => {
  const colorLookupObj: { [key: number]: string } = {
    0: "bg-primary",
    1: "bg-ideaColor",
  };

  return colorLookupObj[index] ?? "bg-blue-500";
};

function EngineerProfile({ limitedNames, domain, handleProfileToggle }: any) {
  useEffect(() => {
    document.addEventListener("click", handleProfileToggle);

    return () => document.removeEventListener("click", handleProfileToggle);
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      style={{ zIndex: 1000000000 }}
    >
      <div onClick={(e) => e.stopPropagation()} className="rounded-lg bg-white">
        <p className="font-Montserrat font-bold tracking-wider text-xl border-b text-center px-8 pt-5 py-2">
          Available Engineers ({limitedNames.length})
        </p>
        {limitedNames.map((name: string, index: number) => {
          return (
            <div
              key={index}
              className="flex items-center border-b gap-x-5 px-8 py-3"
            >
              <div
                className={`flex items-center justify-center w-8 h-8 font-bold text-white rounded-full border-2 border-white ${profileBgColor(
                  index
                )}`}
                title={name}
              >
                {name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-Montserrat tracking-wide text-xl font-bold text-primary">
                  {name}
                </p>
                <p className="font-Montserrat mt-1">
                  Domain: <b>{domain}</b>
                </p>
              </div>
            </div>
          );
        })}
        <button
          className="tracking-wide font-Montserrat font-bold text-white border w-full text-lg py-3 rounded-bl-lg rounded-br-lg bg-primary cursor-pointer flex justify-center items-center gap-x-2"
          onClick={handleProfileToggle}
        >
          Okay!
        </button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLDivElement
  );
}

function EngineerProfileRenderer({ data }: any) {
  const { engineerAvailable, engineerDomain, statusSchedule } = data;
  const [showProfile, setShowProfile] = useState(false);

  const limitedNames = Array.isArray(engineerAvailable)
    ? engineerAvailable.slice(0, 3)
    : [];

  const handleProfileToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowProfile((prev) => !prev);
  };

  if (statusSchedule === "None") {
    return <p>-----</p>;
  }

  return (
    <>
      <div
        className="flex items-center space-x-[-8px] relative top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleProfileToggle}
      >
        {limitedNames.map((name, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-center w-8 h-8 font-bold text-white rounded-full border-2 border-white ${profileBgColor(
                index
              )}`}
              title={name}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          );
        })}
      </div>
      {showProfile && (
        <EngineerProfile
          limitedNames={limitedNames}
          domain={engineerDomain}
          handleProfileToggle={handleProfileToggle}
        />
      )}
    </>
  );
}

export default EngineerProfileRenderer;
