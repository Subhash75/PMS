import { FaLocationArrow } from "react-icons/fa6";
import { GrInProgress, GrSchedulePlay } from "react-icons/gr";
import { MdEngineering, MdPendingActions } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { StyledHeading } from "../../components/Typography/Typography";
import DashboardChips from "./components/DashboardChips";
import DashboardScheduledTasks from "./components/DashboardScheduledTasks";
import EmpProfile from "./components/EmpProfile";
import EmpZone from "./components/EmpZone";
import PMProgress from "./components/PMProgress";
import PendingPM from "./components/PendingPM";

const chipsData = [
  {
    title: "PM scheduled",
    value: "20",
    SVGComponent: <GrSchedulePlay size={28} />,
    SVGComponentAsBg: <GrSchedulePlay size={80} />,
  },
  {
    title: "PM In progress",
    value: "10",
    SVGComponent: <GrInProgress size={28} />,
    SVGComponentAsBg: <GrInProgress size={80} />,
  },
  {
    title: "Pending",
    value: "7",
    SVGComponent: <MdPendingActions size={28} />,
    SVGComponentAsBg: <MdPendingActions size={80} />,
  },
  {
    title: "Pending at FE",
    value: "3",
    SVGComponent: <MdEngineering size={28} />,
    SVGComponentAsBg: <MdEngineering size={80} />,
  },
];

const pendingPM = [
  {
    title: "Task 1",
    location: "SAHARANPUR",
    days: "Pending",
  },
  {
    title: "Task 2",
    location: "VIKRAMPUR",
    days: "Pending",
  },
  {
    title: "Task 3",
    location: "HARDWAR",
    days: "Pending",
  },
  {
    title: "Task 4",
    location: "SAHARANPUR",
    days: "Pending",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const handleInventoryRedirect = () => {
    navigate("/inventory");
  };

  const handleWeeklyScheduleRedirect = () => {
    navigate("/scheduling");
  };

  return (
    <div>
      <div className="py-6">
        <div className="flex justify-between items-center border-b border-primary">
          <StyledHeading css="mb-0 pb-3 px-6">Dashboard</StyledHeading>
          <div className="flex gap-x-5">
            <button
              onClick={handleInventoryRedirect}
              className="tracking-wide px-4 mb-2 py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2"
            >
              Inventory <FaLocationArrow size={20} />
            </button>
            <button
              onClick={handleWeeklyScheduleRedirect}
              className="tracking-wide px-4 mb-2 py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg bg-primary text-white cursor-pointer flex items-center gap-x-2"
            >
              Weekly Schedule <FaLocationArrow size={20} />
            </button>
          </div>
        </div>
        <div className="px-6">
          <h2 className="font-Montserrat tracking-wide text-xl">
            Welcome Back, <b>Subhash</b>
          </h2>

          <div className="flex gap-6">
            <div className="w-3/4 flex flex-col justify-between">
              <div className="flex gap-5 w-full">
                {chipsData.map((value, index) => {
                  return (
                    <DashboardChips
                      key={index}
                      title={value.title}
                      value={value.value}
                      SVGComponent={value.SVGComponent}
                      SVGComponentAsBg={value.SVGComponentAsBg}
                    />
                  );
                })}
              </div>

              <div className="mt-5 rounded-lg border w-full p-3 shadow-md">
                <PMProgress />
              </div>

              <div className="mt-5 rounded-lg border w-full p-3 relative">
                <DashboardScheduledTasks />
              </div>
            </div>

            <div className="w-1/4 border rounded-lg flex flex-col">
              <EmpProfile fullName="Subhash Ghosh" />
              <EmpZone />
              <PendingPM pendingPM={pendingPM} title="Pending" />
              <PendingPM pendingPM={[]} title="Pending at FE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
