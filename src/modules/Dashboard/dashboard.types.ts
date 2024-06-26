type FieldType = "TEXT" | "NUMBER" | "BOOLEAN" | "DROPDOWN";

export interface ChecklistConfigTypes {
  id: number;
  field_slug: string;
  field_type: FieldType;
  field_length: number;
  field_name: string;
  is_mandatory: "Y" | "N";
  is_editable: "Y" | "N";
  validation_group: string;
}

export interface SectionFieldTypes {
  [key: string]: object;
}
export interface RelevantValueTypes {
  fieldWithValuesCount: number;
  totalCount: number;
}

export interface ChecklistReadOnlyConfigTypes {
  [key: string]: {
    [key: string]: { fieldName: string; value: string };
  };
}

export interface ChecklistPropsTypes {
  isOpen: boolean;
  selectedTitle: string;
  sectionFilledValues: SectionFieldTypes;
  handleChecklistDialog: () => void;
  checklistTitles: Array<string>;
  relevantChecklistValues: object;
  handleChecklistChipSelection: (title: string) => void;
}

export interface ChecklistValuesTypes {
  selectedTitle: string;
  relevantChecklistValues: object;
  handleChecklistChipSelection: (title: string) => void;
}
export interface ChecklistDrawerPropsTypes {
  children: React.ReactNode;
  isOpen: boolean;
  handleChecklistDialog: () => void;
}

export interface ChecklistChipsPropsTypes {
  checklistTitles: Array<string>;
  sectionFilledValues: SectionFieldTypes;
  handleChecklistChipSelection: (title: string) => void;
}