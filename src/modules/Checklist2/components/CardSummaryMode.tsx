import { CardSummaryModeTypes, FieldConfigTypes } from "../checklist.types";
import { MdModeEdit } from "react-icons/md";

function CardSummaryMode({
  index,
  title,
  cardValues,
  watch,
  handleFormEdit,
}: CardSummaryModeTypes) {
  return (
    <div
      key={title}
      className="rounded-md p-5 mt-3 mb-5 shadow-customBoxShadow"
    >
      <div className="flex justify-between">
        <p className="text-primary font-Montserrat tracking-wider font-semibold text-2xl mb-3">
          {title}
        </p>
        <button
          onClick={() => handleFormEdit({ index })}
          className="tracking-wide px-4 mb-0 sm:mb-2 py-1 sm:py-3 mt-[2px] font-Montserrat font-bold border rounded-lg border-primary text-primary cursor-pointer flex items-center gap-x-2"
        >
          <MdModeEdit size={20} />
          <span className="text-sm sm:text-base">Edit</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {cardValues[index].map((value: FieldConfigTypes) => {
          return (
            <div className="w-[23%] mb-3 pb-1">
              <p className="font-medium font-Montserrat text-sm text-primary mb-2 ml-1">
                {value.field_name}
              </p>
              <p className="font-bold font-Montserrat text-base tracking-wider mb-2 ml-1">
                {watch(value.field_slug) ? watch(value.field_slug) : "------"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardSummaryMode;
