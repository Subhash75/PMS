import { MdOutlineDelete } from "react-icons/md";
import { ActionButtonProps } from "../scheduling.types";

function RemoveButtonRenderer({ data, onSubmit }: ActionButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSubmit(data);
  };

  return (
    <button
      onClick={handleClick}
      className="tracking-wide px-2 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2"
    >
      Remove <MdOutlineDelete size={20} />
    </button>
  );
}

export default RemoveButtonRenderer;
