import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { FormBuilderComponent } from './pages/form-builder/form-builder';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'forms/new',
    component: FormBuilderComponent
  }
];
