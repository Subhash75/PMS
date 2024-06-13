function PendingPM({ pendingPM, title }: any) {
  return (
    <div
      className={`p-3 font-Montserrat flex flex-col flex-grow w-full sm:w-1/2 xl:w-full border-l-2 xl:border-l-0 flex-shrink-0  items-center ${
        title === "Pending" ? "border-b" : "border-0"
      }`}
    >
      <h4 className="font-semibold w-full text-lg text-primary text-center xl:text-left">{title}</h4>
      {pendingPM.length ? (
        <div className="w-full mt-2 flex flex-col">
          {pendingPM.map((value: any) => {
            return (
              <div
                key={value.title}
                className="bg-gray-100 rounded-lg relative w-full p-3 my-1"
              >
                <h5 className="text-lg sm:text-xl font-semibold tracking-wide text-primary mb-1">
                  {value.title}
                </h5>
                <p className="text-sm">{value.location}</p>
                <p className="absolute right-3 top-3">{value.days}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="h-full flex justify-center items-center font-Montserrat tracking-wider text-xl">
          No Pending PM.
        </p>
      )}
    </div>
  );
}

export default PendingPM;
