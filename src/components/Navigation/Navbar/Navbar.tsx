/*
renders Navbar
Used in <MainLayout />
*/

import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import UserModal from "./UserModal";
import { AiOutlineLogout } from "react-icons/ai";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleToggleModalState = () => {
    setIsLogoutModalOpen((prev) => !prev);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    setIsLogoutModalOpen((prev) => !prev);
  };

  const user = {
    name: "Subhash Ghosh",
    role: "ZTM",
    email: "subhash.ghosh@vodafoneidea.com",
  };

  const username =
    typeof user.name === "string"
      ? user.name.length > 15
        ? user.name.slice(0, 15) + "..."
        : user.name
      : "";

  useEffect(() => {
    const handleCloseLocationSuggestion = () => {
      setIsUserInfoOpen(false);
    };

    document.addEventListener("click", handleCloseLocationSuggestion);

    return () =>
      document.removeEventListener("click", handleCloseLocationSuggestion);
  }, []);

  return (
    <>
      <nav className="bg-white pl-20 pr-1 md:pr-5 flex items-center justify-between shadow-xl relative">
        <div className="flex-grow flex justify-center sm:ml-6 py-1 sm:py-3 tracking-widest font-Montserrat text-primary text-3xl font-bold">
          Preventive Maintenance System
        </div>
        <button
          onClick={handleToggleModalState}
          className="tracking-wide px-4 mb-2 py-3 mr-3 mt-[2px] font-Montserrat font-bold border rounded-lg bg-primary text-white cursor-pointer flex items-center gap-x-2"
        >
          Logout <AiOutlineLogout size={20} />
        </button>
        <div
          className="flex items-center border-l-2 cursor-pointer "
          data-testid="user-info-container"
          onClick={(e) => {
            e.stopPropagation();
            setIsUserInfoOpen(true);
          }}
        >
          <div className="flex justify-center items-center mx-3 sm:mx-6  py-1 sm:py-3">
            <p className="bg-red-600 rounded-full w-8 h-8 leading-8 sm:w-10 sm:h-10 sm:leading-10 pt-px text-center uppercase font-semibold text-2xl text-white">
              {username.slice(0, 1)}
            </p>
          </div>
          <div className="mr-4  py-1 sm:py-3 hidden md:block">
            <p className="font-semibold">{username}</p>
            <p className="text-sm capitalize">{user.role}</p>
          </div>
          <MdOutlineKeyboardArrowDown size={30} />
        </div>
        {isUserInfoOpen && (
          <UserModal name={username} role={user.role} email={user.email} />
        )}
      </nav>
      {isLogoutModalOpen && (
        <Logout
          handleToggleModalState={handleToggleModalState}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default Navbar;