import { RxCross1 } from "react-icons/rx";
import { ChecklistDrawerPropsTypes } from "../../../../../modules/Dashboard/dashboard.types";

function ChecklistDrawer({
  children,
  isOpen,
  handleChecklistDialog,
}: ChecklistDrawerPropsTypes) {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 -translate-x-full")
      }
    >
      <section
        className={
          "w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full font-Montserrat">
          <h2 className=" text-xl flex justify-between font-semibold tracking-wide text-primary border-b border-black p-3">
            Checklist
            <RxCross1
              size={30}
              className="text-primary cursor-pointer"
              onClick={handleChecklistDialog}
              data-testid="notification-close"
            />
          </h2>
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={handleChecklistDialog}
      ></section>
    </main>
  );
}

export default ChecklistDrawer;
