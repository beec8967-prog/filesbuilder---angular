import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FormField {
  id?: number;
  label: string;
  fieldType: string;
  order: number;
  options?: {
    value: string;
    label: string;
  }[];
}

export interface ApprovalStep {
  stepOrder: number;
  name: string;
  approver: string;
  actionType: string;
}

export interface FormResponse {
  id: number;
  name: string;
  createdAt: string;
  createdBy: string;
  fields: FormField[];
}

export interface CreateFormRequest {
  name: string;
  createdBy: string;
  fields: FormField[];
  approvalSteps: ApprovalStep[];
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'https://localhost:7010/api/Forms';

  constructor(private http: HttpClient) {}

  getForms(): Observable<FormResponse[]> {
    return this.http.get<FormResponse[]>(this.apiUrl);
  }

  createForm(request: CreateFormRequest): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }

  getForm(id: number): Observable<FormResponse> {
    return this.http.get<FormResponse>(`${this.apiUrl}/${id}`);
  }
}
