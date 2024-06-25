import { useForm } from "react-hook-form";
import { checklistConfig } from "./checklist.constants";
import { useState } from "react";
import { ActiveStepTypes } from "./checklist.types";

function useChecklist() {
  const { register, watch } = useForm();
  const [activeStep, setActiveStep] = useState<ActiveStepTypes>({
    isActive: { 0: true },
    isComplete: {},
  });

  const cardTitles = Object.keys(checklistConfig || {});
  const cardValues = Object.values(checklistConfig || {});

  const handleFormEdit = ({ index }: { index: number }) => {
    setActiveStep((prevState) => {
      return {
        ...prevState,
        isActive: {
          [index]: true,
        },
      };
    });
  };

  const handleFormSubmit = ({ index }: { index: number }) => {
    setActiveStep((prevState) => {
      return {
        ...prevState,
        isActive: {
          [index + 1]: true,
        },
        isComplete: {
          ...prevState.isComplete,
          [index]: true,
        },
      };
    });
  };

  return {
    register,
    watch,
    activeStep,
    cardTitles,
    cardValues,
    handleFormSubmit,
    handleFormEdit
  };
}

export default useChecklist;
