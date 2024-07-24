import { UseFormRegister, FieldValues } from "react-hook-form";
import Input from "../../../components/GlobalComponents/FormComponents/Input";
import { CardEditModeTypes, FieldConfigTypes } from "../checklist.types";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";

function CardEditMode({
  title,
  index,
  register,
  cardValues,
  handleFormSubmit,
}: CardEditModeTypes) {
  return (
    <div
      key={title}
      className="rounded-md p-5 mt-3 mb-5 shadow-customBoxShadow"
    >
      <div className="flex justify-between">
        <p className="text-primary font-Montserrat tracking-wider font-semibold text-2xl mb-3">
          {title}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        {cardValues[index].map((value: FieldConfigTypes) => {
          return (
            <Input
              type="text"
              id={value.field_slug}
              label={value.field_name}
              placeholder={value.field_name}
              inputRef={register(value.field_slug)}
              extraCss="!w-[23%]"
            />
          );
        })}
      </div>
      <button
        onClick={() => handleFormSubmit({ index })}
        className="tracking-wide px-4 mb-0 ml-auto sm:mb-2 py-1 sm:py-3 mt-[2px] font-Montserrat font-bold border rounded-lg bg-primary text-white cursor-pointer flex items-center gap-x-2"
      >
        <IoMdAdd size={20} />
        <span className="text-sm sm:text-base">Submit</span>
      </button>
    </div>
  );
}

export default CardEditMode;
