function EmpZone() {
  return (
    <div className="p-3 font-Montserrat border-b w-full md:w-[50%] xl:w-full flex-shrink-0 flex flex-col justify-between xl:block border-l-2 xl:border-l-0">
      <h4 className=" font-semibold text-lg text-primary text-center xl:text-left">Zone Details</h4>
      <div className="flex justify-between items-center py-1 mt-3">
        <div>
          <p className="text-[12px]">Current Zone</p>
          <p className="mt-2 text-base sm:text-lg 2xl:text-xl capitalize font-semibold tracking-wide">Dehradun</p>
        </div>
        <div>
          <p className="text-[12px] text-right">Total PM in current zone</p>
          <p className="mt-2 text-base sm:text-lg 2xl:text-xl capitalize font-semibold tracking-wide text-right">5 scheduled PM</p>
        </div>
      </div>
    </div>
  );
}

export default EmpZone;
