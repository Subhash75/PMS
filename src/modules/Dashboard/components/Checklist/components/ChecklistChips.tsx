function ChecklistChips({
  checklistTitles,
  sectionFilledValues,
  handleChecklistChipSelection,
}: {
  checklistTitles: Array<string>;
  sectionFilledValues: object;
  handleChecklistChipSelection: (title: string) => void;
}) {
  return (
    <div
      className="flex flex-col justify-center items-center relative"
      style={{ height: "calc(100vh - 55px)" }}
    >
      <h3 className="font-Montserrat text-primary tracking-wider absolute left-3 top-0 text-xl">
        Click a tile for detailed view:
      </h3>
      {checklistTitles.map((value) => {
        const relevantValue = sectionFilledValues[value] ?? {};
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
            className={`rounded-full my-5 text-lg font-semibold text-white w-3/4 p-3 text-center cursor-pointer truncate ${chipBgColor}`}
          >
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default ChecklistChips;
