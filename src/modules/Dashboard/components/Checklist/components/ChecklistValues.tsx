import { IoMdArrowRoundBack } from "react-icons/io";

function ChecklistValues({
  selectedTitle,
  relevantChecklistValues,
  handleChecklistChipSelection,
}: {
  selectedTitle: string;
  relevantChecklistValues: object;
  handleChecklistChipSelection: (title: string) => void;
}) {
  const objectValues = Object.values(relevantChecklistValues || {});

  return (
    <div className="px-2">
      <div
        className=" cursor-pointer flex gap-x-2"
        onClick={() => handleChecklistChipSelection("")}
      >
        <IoMdArrowRoundBack className=" fill-primary" size={30} />
        <b className="text-primary font-Montserrat text-2xl tracking-wide">
          Back
        </b>
      </div>

      <div className="mt-5">
        <h3 className="font-Montserrat tracking-wider text-primary text-xl text-center underline mb-3">
          {selectedTitle}
        </h3>
        {objectValues.map((value) => {
          return (
            <div className="mb-5 flex justify-between">
              <h6 className="w-[40%]">{value.fieldName}</h6>
              <span>:</span>
              <p className="w-[45%] text-primary text-lg font-semibold">
                {value.value ? value.value : "-----"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChecklistValues;
