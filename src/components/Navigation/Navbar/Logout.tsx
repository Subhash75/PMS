import ReactDOM from "react-dom";
import { IoWarningOutline } from "react-icons/io5";

function Logout({
  handleToggleModalState,
  handleLogout,
}: {
  handleToggleModalState: () => void;
  handleLogout: () => void;
}) {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      style={{ zIndex: 1000000000 }}
    >
      <div className="font-Montserrat rounded-lg bg-white py-6 px-10 flex flex-col justify-center items-center">
        <IoWarningOutline size={50} className="text-ideaColor" />
        <p className="text-base sm:text-2xl tracking-wide my-6">
          Are you sure you want to logout?
        </p>
        <div className="flex gap-5">
          <button
            className="border border-primary px-6 py-3 rounded-lg"
            onClick={handleToggleModalState}
          >
            Cancel
          </button>
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg"
            onClick={handleLogout}
          >
            Yes! Proceed
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLDivElement
  );
}

export default Logout;
