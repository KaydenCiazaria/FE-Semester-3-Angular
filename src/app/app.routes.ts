import { Routes } from '@angular/router';
import { PopLoginComponent } from './components/popups/pop-login/pop-login.component';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';
import { PropertyInformationComponent } from './components/property-information/property-information.component';
import { FormRegisterComponent } from './components/form/form-register/form-register.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormAddPropertyComponent} from './components/form/form-add-property/form-add-property.component';
import { FormReservationComponent } from './components/form/form-reservation/form-reservation.component';
import { FormEditPropertyComponent } from './components/form/form-edit-property/form-edit-property.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoggedInHomeComponent } from './pages/logged-in-home/logged-in-home.component';
import { PropertyComponent } from './pages/property/property.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { NotificationRenterComponent } from './pages/notification/notification-renter/notification-renter.component';
import { VillaInformationComponent } from './pages/villa-information/villa-information.component';
import { HeaderComponent } from './components/header/header.component';
import { PopVerificationComponent } from './components/popups/pop-verification/pop-verification.component';

export const routes: Routes = [
  { path: 'login', component: PopLoginComponent },
  { path: '', component: HomeComponent },
  { path: 'loggedin', component: LoggedInHomeComponent},
  { path: 'form-register', component: FormRegisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'form-add-property', component: FormAddPropertyComponent },
  { path: 'form-reservation', component: FormReservationComponent },  // this is the final: { path: 'reservation/:id', component: FormReservationComponent },
  { path: 'edit-villa', component: FormEditPropertyComponent }, // add /:i
  { path: 'auth-button', component: AuthButtonsComponent },
  { path: 'property-info', component: PropertyInformationComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'burger-menu', component: BurgerMenuComponent },
  { path: 'notification-card', component: NotificationCardComponent }, 
  { path: 'notification', component: NotificationRenterComponent }, 
  { path: 'villa-info', component: VillaInformationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'pop-verification', component: PopVerificationComponent },
];
