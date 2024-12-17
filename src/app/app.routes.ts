import { Routes } from '@angular/router';
import { PopLoginComponent } from './components/popups/pop-login/pop-login.component';
import { FormRegisterComponent } from './components/form/form-register/form-register.component';
import {FormAddPropertyComponent} from './components/form/form-add-property/form-add-property.component';
import { FormReservationComponent } from './components/form/form-reservation/form-reservation.component';
import { FormEditPropertyComponent } from './components/form/form-edit-property/form-edit-property.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
export const routes: Routes = [
  { path: 'login', component: PopLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'form-register', component: FormRegisterComponent },
  { path: 'form-add-property', component: FormAddPropertyComponent },
  { path: 'reservation', component: FormReservationComponent },  // this is the final: { path: 'reservation/:id', component: FormReservationComponent },
  { path: 'edit-villa', component: FormEditPropertyComponent }, // add /:id
  { path: 'burger-menu', component:BurgerMenuComponent },
];
