import { RxCross1 } from "react-icons/rx";

const position = [
  {
    id: 1,
    task: "Task 1",
    domain: "Mobility",
    name: "Subhash Ghosh",
    date: "04/03/2024",
    priority: "high",
    siteType: "Strategic",
  },
  {
    id: 2,
    task: "Task 2",
    domain: "Mobility",
    name: "Rahul Gurujala",
    date: "30/05/2024",
    priority: "low",
    siteType: "Transport",
  },
  {
    id: 3,
    task: "Task 3",
    domain: "Transport",
    name: "Rahul Kulthe",
    date: "22/01/2024",
    priority: "medium",
    siteType: "Strategic",
  },
  {
    id: 4,
    task: "Task 4",
    domain: "Transport",
    name: "Rahul Gupta",
    date: "02/05/2024",
    priority: "medium",
    siteType: "Mobility",
  },
];

const NotificationDrawer = ({ handleClose }: {handleClose: () => void}) => {
  return (
    <div className="bg-black font-Montserrat bg-opacity-25 fixed inset-0 z-[100000000] ">
      <div className="w-[35rem] h-full bg-white ml-auto p-3 overflow-auto">
        <h2 className=" text-xl flex justify-between font-semibold tracking-wide text-primary border-b border-black pb-3">
          Notifications ({position.length})
          <RxCross1
            size={30}
            className="text-primary cursor-pointer"
            onClick={handleClose}
            data-testid="notification-close"
          />
        </h2>
        {position.map((value) => (
          <div
            key={value.id}
            className="flex flex-wrap justify-between py-3 border-b border-primary"
          >
            <h3 className="w-full text-primary text-xl capitalize font-semibold tracking-wide mb-4">
              {value.task}{" "}
              <span className="ml-1 text-sm font-normal lowercase text-black">
                initiated by <b className="capitalize">{value.name} </b> on{" "}
                <b>{value.date}</b>
              </span>
            </h3>
            <div>
              <p className="text-sm">Engineer Domain</p>
              <p className="text-lg font-semibold">{value.domain}</p>
            </div>
            <div>
              <p className="text-sm text-center">Site Type</p>
              <p className="text-lg text-center font-semibold">{value.siteType}</p>
            </div>
            <div>
              <p className="text-sm text-right">Task Priority</p>
              <p className="text-base font-semibold capitalize text-right">
                {value.priority}
              </p>
            </div>
            <div className="flex justify-between w-full flex-shrink-0 flex-grow-0 mt-4">
              <button className="bg-primary text-white rounded-md py-2 px-4">
                Accept
              </button>
              <button className="border-primary border text-primary rounded-md py-2 px-4">
                Reject
              </button>
              <button className="bg-primary text-white rounded-md py-2 px-4">
                Hold
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDrawer;
