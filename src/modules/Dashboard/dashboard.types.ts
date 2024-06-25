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
