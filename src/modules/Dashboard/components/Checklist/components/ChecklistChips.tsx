import {
  ChecklistChipsPropsTypes,
  RelevantValueTypes,
} from "../../../../../modules/Dashboard/dashboard.types";

function ChecklistChips({
  checklistTitles,
  sectionFilledValues,
  handleChecklistChipSelection,
}: ChecklistChipsPropsTypes) {
  return (
    <div className="flex flex-col justify-center items-center relative px-3">
      <h3 className="font-Montserrat text-primary tracking-wider w-full text-left text-xl">
        Click a tile for detailed view:
      </h3>
      <div className="flex gap-x-5 my-3">
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3 bg-green-600"></div>
          <p className="text-sm">Complete</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3 bg-ideaColor"></div>
          <p className="text-sm">Partially Complete</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-3 h-3 bg-primary"></div>
          <p className="text-sm">Incomplete</p>
        </div>
      </div>
      {checklistTitles.map((value) => {
        const relevantValue: RelevantValueTypes =
          (sectionFilledValues[value] as RelevantValueTypes) ?? {};
        let percentage = Math.floor(
          (relevantValue.fieldWithValuesCount / relevantValue.totalCount) * 100
        );

        const chipBgColor =
          percentage === 100
            ? "bg-green-600"
            : percentage > 50 && percentage < 100
            ? "bg-ideaColor"
            : "bg-primary";
        return (
          <p
            key={value}
            onClick={() => handleChecklistChipSelection(value)}
            className={`rounded-full my-3 text-lg font-semibold text-white w-3/4 p-3 text-center cursor-pointer truncate ${chipBgColor}`}
          >
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default ChecklistChips;
