function EmpProfile({ fullName }: { fullName: string }) {
  return (
    <div className="p-3 font-Montserrat border-b">
      <h4 className=" font-semibold text-lg text-primary">User Details</h4>
      <div className="flex flex-col justify-center items-center mx-3 py-1">
        <p className="bg-red-600 rounded-full w-14 h-14 flex items-center justify-center text-center uppercase font-semibold text-4xl text-white">
          S
        </p>
        <p className="mt-2">{fullName}</p>
        <p className="text-gray-500 text-sm">ZTM</p>
      </div>
    </div>
  );
}

export default EmpProfile;
