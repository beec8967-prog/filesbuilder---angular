import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  FormService,
  FormField,
  ApprovalStep
} from '../../services/form.service';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-builder.html',
  styleUrl: './form-builder.css'
})
export class FormBuilderComponent {

  formName = '';
  fields: FormField[] = [];

  approvalSteps: ApprovalStep[] = [
    {
      stepOrder: 1,
      name: 'אישור מנהל',
      approver: 'Manager',
      actionType: 'Approve'
    }
  ];

  selectedFieldType = 'text';
  selectedFieldLabel = '';

  constructor(
    private formService: FormService
  ) {}

  addField(): void {

    if (!this.selectedFieldLabel.trim()) {
      return;
    }

    const field: FormField = {
      label: this.selectedFieldLabel,
      fieldType: this.selectedFieldType,
      order: this.fields.length + 1
    };

    if (this.selectedFieldType === 'select') {
      field.options = [
        { value: 'option1', label: 'אפשרות 1' },
        { value: 'option2', label: 'אפשרות 2' }
      ];
    }

    this.fields.push(field);

    this.selectedFieldLabel = '';
  }

  removeField(index: number): void {
    this.fields.splice(index, 1);

    this.fields.forEach((field, i) => {
      field.order = i + 1;
    });
  }

  moveUp(index: number): void {
    if (index === 0) {
      return;
    }

    const temp = this.fields[index];
    this.fields[index] = this.fields[index - 1];
    this.fields[index - 1] = temp;

    this.updateOrders();
  }

  moveDown(index: number): void {
    if (index === this.fields.length - 1) {
      return;
    }

    const temp = this.fields[index];
    this.fields[index] = this.fields[index + 1];
    this.fields[index + 1] = temp;

    this.updateOrders();
  }

  private updateOrders(): void {
    this.fields.forEach((field, index) => {
      field.order = index + 1;
    });
  }

  saveForm(): void {

    if (!this.formName.trim()) {
      alert('יש להזין שם לטופס');
      return;
    }

    if (this.fields.length === 0) {
      alert('יש להוסיף לפחות שדה אחד');
      return;
    }

    const request = {
      name: this.formName,
      createdBy: 'admin',
      fields: this.fields,
      approvalSteps: this.approvalSteps
    };

    this.formService.createForm(request).subscribe({
      next: () => {
        alert('הטופס נשמר בהצלחה');
      },
      error: (error) => {
        console.error(error);
        alert('אירעה שגיאה בשמירת הטופס');
      }
    });
  }
}
