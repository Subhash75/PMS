function EmpProfile({ fullName }: { fullName: string }) {
  return (
    <div className="p-3 font-Montserrat border-b w-full md:w-[50%] xl:w-full flex-shrink-0">
      <h4 className=" font-semibold text-lg text-primary text-center xl:text-left">User Details</h4>
      <div className="flex flex-col justify-center items-center mx-3 py-1">
        <p className="bg-red-600 rounded-full w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center text-center uppercase font-semibold text-xl sm:text-4xl text-white">
          S
        </p>
        <p className="mt-2">{fullName}</p>
        <p className="text-gray-500 text-sm">ZTM</p>
      </div>
    </div>
  );
}

export default EmpProfile;
