import { useState } from "react";
import { checklistReadOnlyConfig } from "./dashboard.constants";
import { SectionFieldTypes } from "./dashboard.types";

function useDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const checklistTitles = Object.keys(checklistReadOnlyConfig || {});

  const relevantChecklistValues = checklistReadOnlyConfig[selectedTitle] ?? {};

  const sectionFilledValues: SectionFieldTypes = {};

  for (let key in checklistReadOnlyConfig) {
    let objectValues = Object.values(checklistReadOnlyConfig[key]);
    let fieldWithValuesCount = 0;
    objectValues.forEach((value) => {
      if (value.value !== "") {
        fieldWithValuesCount++;
      }
    });

    sectionFilledValues[key] = {
      fieldWithValuesCount,
      totalCount: objectValues.length,
    };
  }

  const handleChecklistDialog = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChecklistChipSelection = (title: string) => {
    setSelectedTitle(title);
  };

  return {
    isOpen,
    checklistTitles,
    selectedTitle,
    sectionFilledValues,
    relevantChecklistValues,
    handleChecklistDialog,
    handleChecklistChipSelection,
  };
}

export default useDashboard;
