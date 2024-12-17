import { Component } from '@angular/core';
import { PopLoginComponent } from '../popups/pop-login/pop-login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-buttons',
  standalone: true,
  imports: [PopLoginComponent,CommonModule],
  template: `
    <div>
      <button (click)="handleLoginClick()">Login</button>
      <button (click)="navigateToRegister()">Register</button>
      
      <!-- Render PopLogin modal conditionally -->
      <app-pop-login 
        *ngIf="isLoginOpen" 
        (closeModal)="closeModal()">
      </app-pop-login>
    </div>
  `
})
export class AuthButtonsComponent {
  isLoginOpen = false;

  handleLoginClick() {
    this.isLoginOpen = true; // Open the modal
  }

  closeModal() {
    this.isLoginOpen = false; // Close the modal
  }

  navigateToRegister() {
    window.location.href = 'headerPlain/register'; // Direct navigation
  }
}
