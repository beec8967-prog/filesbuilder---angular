import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormService, FormResponse } from '../../services/form.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  forms: FormResponse[] = [];
  loading = true;
  error = '';

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.loadForms();
  }

  loadForms(): void {
    this.formService.getForms().subscribe({
      next: (forms) => {
        console.log('FORMS:', forms);

        this.forms = forms;
        this.loading = false;
        this.error = '';
      },

      error: (err) => {
        console.error('FORMS ERROR:', err);

        this.loading = false;
        this.error = 'לא ניתן לטעון את הטפסים';
      }
    });
  }
}
