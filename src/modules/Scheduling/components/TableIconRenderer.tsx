import { FaCheck } from "react-icons/fa";

function TableIconRenderer({ data, type }: any) {
  const isFieldTrue = data[type];

  return (
    <div className="relative top-1/2 -translate-y-1/2">
      {isFieldTrue ? <FaCheck size={20} color="red" /> : null}
    </div>
  );
}

export default TableIconRenderer;
