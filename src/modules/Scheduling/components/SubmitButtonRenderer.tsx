import { MdOutlineBookmarkAdd } from "react-icons/md";
import { ActionButtonProps } from "../scheduling.types";

const SubmitButtonRenderer = ({
    data,
    onSubmit,
  }: ActionButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onSubmit(data);
    };
  
    return (
      <button
        className="tracking-wide px-2 mt-[2px] font-Montserrat font-bold text-white border rounded-lg bg-primary cursor-pointer flex items-center gap-x-2"
        onClick={handleClick}
      >
        Shortlist <MdOutlineBookmarkAdd size={20} />
      </button>
    );
  };

  export default SubmitButtonRenderer