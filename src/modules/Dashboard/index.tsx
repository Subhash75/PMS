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
import useDashboard from "./useDashboard";
import Checklist from "./components/Checklist";
import SiteTypeChart from "./components/DashboardCharts/SiteTypeChart";
import EngineersChart from "./components/DashboardCharts/EngineersChart";
import PMCountGraph from "./components/DashboardCharts/PMCountGraph";
import PunchPoints from "./components/DashboardCharts/PunchPoints";

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
    title: "Unassigned",
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
  const {
    isOpen,
    checklistTitles,
    sectionFilledValues,
    selectedTitle,
    relevantChecklistValues,
    handleChecklistDialog,
    handleChecklistChipSelection,
  } = useDashboard();

  const navigate = useNavigate();

  const handleInventoryRedirect = () => {
    navigate("/inventory");
  };

  const handleWeeklyScheduleRedirect = () => {
    navigate("/scheduling");
  };

  const handleTrackingRedirect = () => {
    navigate("/tracking");
  };

  const handleReportsRedirect = () => {
    navigate("/report");
  };

  const handleChecklistRedirect = () => {
    navigate("/checklist");
  };

  return (
    <>
      <div className="py-6">
        <div className="flex justify-between items-center border-b border-primary flex-wrap sm:flex-nowrap">
          <StyledHeading css="!mb-0 pb-3 px-6 w-full sm:w-auto flex-shrink-0 sm:flex-shrink">
            Dashboard
          </StyledHeading>
          <div className="flex gap-x-2 lg:gap-x-5 px-6 sm:px-0">
            <button
              onClick={handleChecklistRedirect}
              className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg bg-primary text-white cursor-pointer flex items-center gap-x-2"
            >
              Checklist <FaLocationArrow size={20} />
            </button>
            <button
              onClick={handleTrackingRedirect}
              className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2"
            >
              Live Track <FaLocationArrow size={20} />
            </button>
            <button
              onClick={handleReportsRedirect}
              className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg bg-primary text-white cursor-pointer flex items-center gap-x-2"
            >
              Reports <FaLocationArrow size={20} />
            </button>
            <button
              onClick={handleInventoryRedirect}
              className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2"
            >
              Inventory <FaLocationArrow size={20} />
            </button>
            <button
              onClick={handleWeeklyScheduleRedirect}
              className="tracking-wide px-3 lg:px-4 mb-2 py-1 sm:py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg bg-primary text-white cursor-pointer flex items-center gap-x-2"
            >
              Weekly Schedule <FaLocationArrow size={20} />
            </button>
          </div>
        </div>
        <div className="px-3 md:px-6 relative">
          <h2 className="font-Montserrat tracking-wide text-xl mt-2">
            Welcome Back, <b>Subhash</b>
          </h2>

          <div className="flex flex-wrap xl:flex-nowrap gap-6 absolute left-3 md:left-6 right-3 md:right-6 w-auto xl:static">
            <div className="w-full xl:w-3/4 order-2 xl:order-1 flex flex-shrink-0 xl:flex-shrink flex-col justify-between">
              <div className="hidden md:flex gap-5 w-full absolute top-0 xl:static">
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

              <div className="flex gap-x-10 mt-6 bg-white px-4  rounded-md shadow-customBoxShadow ">
                <SiteTypeChart />
                <EngineersChart />
              </div>

              <PMCountGraph />

              <PMProgress handleChecklistDialog={handleChecklistDialog} />

              <DashboardScheduledTasks />
            </div>

            <div className="w-full xl:w-1/4 mt-2 md:mt-[175px] xl:mt-0 order-1 xl:order-2 border rounded-lg flex flex-wrap xl:flex-nowrap flex-shrink-0 xl:flex-shrink flex-row xl:flex-col">
              <EmpProfile fullName="Subhash Ghosh" />
              <EmpZone />
              <PunchPoints />
              <PendingPM pendingPM={pendingPM} title="Sub Zone Pending Tasks" />
              <PendingPM pendingPM={[]} title="Pending at FE" />
            </div>
          </div>
        </div>
      </div>
      <Checklist
        isOpen={isOpen}
        selectedTitle={selectedTitle}
        sectionFilledValues={sectionFilledValues}
        checklistTitles={checklistTitles}
        relevantChecklistValues={relevantChecklistValues}
        handleChecklistDialog={handleChecklistDialog}
        handleChecklistChipSelection={handleChecklistChipSelection}
      />
    </>
  );
}

export default Dashboard;
