import { FieldValues, UseFormRegister } from "react-hook-form";

type FieldType = "TEXT" | "NUMBER" | "BOOLEAN" | "DROPDOWN";

export interface FieldConfigTypes {
  id: number;
  field_slug: string;
  field_type: FieldType;
  field_length: number;
  field_name: string;
  is_mandatory: "Y" | "N";
  is_editable: "Y" | "N";
  validation_group: string;
}

interface ChecklistConfig {
  [section: string]: FieldConfigTypes[];
}

export interface ActiveStepTypes {
  isActive: {
    [index: number]: boolean;
  };
  isComplete: {
    [index: number]: boolean;
  };
}

interface CommonCardTypes {
  register: UseFormRegister<FieldValues>;
  handleFormSubmit: ({ index }: { index: number }) => void;
  //   cardValues: Array<Array<FieldConfigTypes>>;
  cardValues: any;
}

export interface CardRendererTypes extends CommonCardTypes {
  cardTitles: Array<string>;
  activeStep: ActiveStepTypes;
  watch: any;
  handleFormEdit: ({ index }: { index: number }) => void
}

export interface CardEditModeTypes extends CommonCardTypes {
  title: string;
  index: number;
}

export interface CardSummaryModeTypes {
  index: number;
  title: string;
  cardValues: any;
  watch: any
  handleFormEdit: ({ index }: { index: number }) => void
}
