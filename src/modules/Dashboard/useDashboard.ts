import { useState } from "react";
import { checklistReadOnlyConfig } from "./dashboard.constants";

function useDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const checklistTitles = Object.keys(checklistReadOnlyConfig || {});

  const relevantChecklistValues = checklistReadOnlyConfig[selectedTitle] ?? {};

  const sectionFilledValues = {};

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

  console.log({ checklistReadOnlyConfig, sectionFilledValues });

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
