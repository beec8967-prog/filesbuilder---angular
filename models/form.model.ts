export interface FormField {
  label: string;
  fieldType: string;
  order: number;
  optionsJson?: string;
}

export interface ApprovalStep {
  stepOrder: number;
  name: string;
  approver: string;
  actionType: string;
}

export interface CreateFormRequest {
  name: string;
  createdBy: string;
  fields: FormField[];
  approvalSteps: ApprovalStep[];
}
