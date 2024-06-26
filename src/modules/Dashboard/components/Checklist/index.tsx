import { ChecklistPropsTypes } from "../../dashboard.types";
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
}: ChecklistPropsTypes) {
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
