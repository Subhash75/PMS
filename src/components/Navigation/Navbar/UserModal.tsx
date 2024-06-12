function UserModal({
  name,
  role,
  email,
}: {
  name: string;
  role: string;
  email: string;
}) {
  const handleEventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute top-[120%] z-[1000000] font-Montserrat right-6 shadow-lg w-72 rounded-lg px-3 py-5 bg-white"
      onClick={(e) => handleEventPropagation(e)}
    >
      <p className="truncate">
        Username: <b className="ml-2 text-primary">{name}</b>
      </p>
      <p className="my-2 truncate">
        Role: <b className="ml-2 text-primary capitalize">{role}</b>
      </p>
      <p className="truncate">
        E-mail: <b className="ml-2 text-primary">{email}</b>
      </p>
    </div>
  );
}

export default UserModal;
