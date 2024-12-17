import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent {
  isLoginOpen: boolean = false; // State to track login modal visibility

  constructor(private router: Router) {}

  openLoginModal(): void {
    this.isLoginOpen = true; // Open modal
  }

  closeModal(): void {
    this.isLoginOpen = false; // Close modal
  }

  navigateToRegister(): void {
    this.router.navigate(['/headerPlain/register']); // Navigate to Register
  }
}
