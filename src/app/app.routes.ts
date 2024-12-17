import { Routes } from '@angular/router';
import { PopLoginComponent } from './components/popups/pop-login/pop-login.component';
import { FormRegisterComponent } from './components/form/form-register/form-register.component';

export const routes: Routes = [
  { path: 'login', component: PopLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'form-register', component: FormRegisterComponent },
];
