import React from "react";
import ReactDOM from "react-dom";
import { RxCross1 } from "react-icons/rx";
// import SpinnerLoader from "src/components/Loaders/SpinnerLoader";

interface ModalPropsTypes {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onClick: () => void;
  submitBtnText: string;
  isLoading: boolean;
}

const Modal = ({
  title = "",
  isOpen,
  onClose,
  children,
  onClick = () => {},
  submitBtnText,
  isLoading,
}: ModalPropsTypes) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      style={{ zIndex: 1000000000 }}
    >
      <div className="bg-white rounded-lg py-1 max-w-[1100px] mx-3">
        <div className="relative bg-white shadow-md flex justify-between items-center p-5">
          <p className="font-Montserrat text-2xl">{title}</p>
          <RxCross1 onClick={onClose} size={24} className="cursor-pointer" />
        </div>
        <div className="">{children}</div>
        <div className="shadow-md border-t px-5 py-3 flex justify-end">
          <button
            className="bg-primary text-white font-semibold rounded-md py-2 px-6 flex gap-2"
            onClick={onClick}
          >
            {isLoading ? (
              submitBtnText ? (
                <>
                  {submitBtnText}ing...
                  {/* <SpinnerLoader /> */}
                </>
              ) : (
                <>
                  Finishing
                  {/* <SpinnerLoader /> */}
                </>
              )
            ) : submitBtnText ? (
              submitBtnText
            ) : (
              "Finish"
            )}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};

export default Modal;
