import ChecklistChips from "./components/ChecklistChips";
import ChecklistDrawer from "./components/ChecklistDrawer";
import ChecklistValues from "./components/ChecklistValues";

function Checklist({
  isOpen,
  handleChecklistDialog,
  checklistTitles,
  sectionFilledValues,
  selectedTitle,
  relevantChecklistValues,
  handleChecklistChipSelection,
}: {
  isOpen: boolean;
  selectedTitle: string;
  sectionFilledValues: object;
  handleChecklistDialog: () => void;
  checklistTitles: Array<string>;
  relevantChecklistValues: object;
  handleChecklistChipSelection: (title: string) => void;
}) {
  return (
    <ChecklistDrawer
      isOpen={isOpen}
      handleChecklistDialog={handleChecklistDialog}
    >
      {selectedTitle ? (
        <ChecklistValues selectedTitle={selectedTitle} relevantChecklistValues={relevantChecklistValues} handleChecklistChipSelection={handleChecklistChipSelection} />
      ) : (
        <ChecklistChips
          checklistTitles={checklistTitles}
          handleChecklistChipSelection={handleChecklistChipSelection}
          sectionFilledValues={sectionFilledValues}
        />
      )}
    </ChecklistDrawer>
  );
}

export default Checklist;
