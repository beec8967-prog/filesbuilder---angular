export interface FormField {
  id: number;
  label: string;
  fieldType: string;
  order: number;
  options: FieldOption[];
}

export interface FieldOption {
  value: string;
  label: string;
}
