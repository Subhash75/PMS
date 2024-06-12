import { ReactElement } from "react";
import { IoMdAdd } from "react-icons/io";
// import SpinnerLoader from "src/components/Loaders/SpinnerLoader";

interface ButtonPropsTypes {
  icon?: ReactElement;
  text: string;
  customClass?: string;
  iconFirst?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

function Button({
  icon = <IoMdAdd size={21} />,
  text = "Add Entry",
  customClass = "",
  iconFirst = true,
  onClick = () => {},
  isLoading = false,
  type = undefined,
}: ButtonPropsTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-3 font-Montserrat px-4 py-2 rounded-md text-white bg-primary text-md ${customClass}`}
    >
      {iconFirst ? (
        <>
          {isLoading ? (
            <>
              {text}...
              {/* <SpinnerLoader /> */}
            </>
          ) : (
            <>
              {icon}
              {text}
            </>
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <>
              ${text}...
              {/* <SpinnerLoader /> */}
            </>
          ) : (
            <>
              {" "}
              {text}
              {icon}
            </>
          )}
        </>
      )}
    </button>
  );
}

export default Button;
