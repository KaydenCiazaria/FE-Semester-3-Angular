import { Routes } from '@angular/router';
import { PopLoginComponent } from './components/popups/pop-login/pop-login.component';

export const routes: Routes = [
  { path: 'login', component: PopLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
