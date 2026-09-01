import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  FormService,
  FormResponse
} from '../../services/form.service';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-view.html',
  styleUrl: './form-view.css'
})
export class FormView implements OnInit {

  form: FormResponse | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.formService.getForm(id).subscribe({
      next: (form) => {
        this.form = form;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'לא ניתן לטעון את הטופס';
        this.loading = false;
      }
    });
  }
}
