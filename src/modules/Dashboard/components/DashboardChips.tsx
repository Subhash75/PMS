function DashboardChips({ ...props }) {
  return (
    <div className="relative rounded-md pl-5 w-[24%] border bg-white shadow-md mt-10">
      <div className="p-3 absolute bottom-full translate-y-1/2 left-3 border rounded-full bg-primary text-white fill-white">
        {props.SVGComponent}
      </div>
      <div className="relative overflow-hidden pb-5">
        <p className="mt-8 text-3xl font-Montserrat font-semibold">
          {props.value}
        </p>
        <p className="text-sm">{props.title}</p>
        <div className="absolute left-[90%] top-[80%] -translate-x-1/2 -translate-y-1/2 text-gray-300 fill-gray-300 hidden lg:inline-block">
          {props.SVGComponentAsBg}
        </div>
      </div>
    </div>
  );
}

export default DashboardChips;
