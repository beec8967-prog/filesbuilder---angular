export interface BuilderField {
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

export interface CreateFormRequest {
  name: string;
  createdBy: string;
  fields: BuilderField[];
  approvalSteps: ApprovalStep[];
}

export interface ApprovalStep {
  stepOrder: number;
  name: string;
  approver: string;
  actionType: string;
}
