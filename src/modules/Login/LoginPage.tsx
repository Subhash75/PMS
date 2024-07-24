import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import * as yup from "yup";
import PMSLogo from "../../assets/images/PMLogo.png";
import SquaresGrid from "../../assets/images/LoginSquaresGrid.png";
import VodafoneLogo from "../../assets/images/VodafoneLogo.svg";
import { useNavigate } from "react-router-dom";
import { Error } from "../../components/Typography/Typography";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const yupValidate = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidate),
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const handleSubmit = async () => {
    const validationPassed = await trigger();

    if (!validationPassed) {
      return;
    }
    sessionStorage.setItem("token", "true");
    navigate("/", { replace: true });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex min-h-screen">
        <div className="bg-gray-100 w-1/2 p-6  flex-shrink-0 flex-grow-0  hidden lg:flex flex-col justify-center items-center  ">
          <img
            src={VodafoneLogo}
            alt="vodafone_logo"
            className="w-16 h-16 object-contain"
          />
          <img
            src={PMSLogo}
            alt="vodafone_logo"
            className="w-3/5 h-[30%] object-contain"
          />
          <h1 className="font-Montserrat tracking-wider text-center text-3xl mb-3 text-primary">
            Preventive Maintenance System
          </h1>
        </div>
        <div className="w-full lg:w-1/2 p-6 flex-shrink-0 flex-grow-0 flex items-center justify-center font-Montserrat">
          <div className="flex flex-col justify-center relative w-[550px]">
            <img
              src={SquaresGrid}
              alt="squares_grid"
              className="hidden sm:block absolute bottom-[88%] right-0"
            />
            <h2 className="text-4xl  tracking-wider mb-3">Login!</h2>
            <p>Great to have you back. Log in and let's get started!</p>
            <div className="relative pb-5 mb-2">
              <div className="rounded-lg border border-gray-400 mt-5 px-5 py-2 flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full mr-3 focus:border-gray-400 focus:outline-0"
                  {...register("username")}
                />
                <CiUser className="text-gray-400" size={30} />
              </div>
              {errors?.username?.message && (
                <Error>{errors.username.message}</Error>
              )}
            </div>
            <div className="relative pb-5 ">
              <div className="rounded-lg border border-gray-400 px-5 py-2 flex justify-between items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full mr-3 focus:border-gray-400 focus:outline-0"
                  {...register("password")}
                />
                {showPassword ? (
                  <IoLockClosedOutline
                    data-testid="hide-password"
                    className="text-gray-400 cursor-pointer"
                    size={30}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <GoEye
                    data-testid="show-password"
                    className="text-gray-400  cursor-pointer"
                    size={30}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              {errors?.password?.message && (
                <Error>{errors.password.message}</Error>
              )}
            </div>

            <p className="ml-auto cursor-pointer text-primary font-Montserrat">
              Forgot Password?
            </p>

            <button
              className="bg-primary text-white p-3 rounded-lg mt-5 flex justify-center gap-5"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
