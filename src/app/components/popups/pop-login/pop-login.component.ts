import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-pop-login',
  standalone: true,
  templateUrl: './pop-login.component.html',
  styleUrls: ['./pop-login.component.css'],
  imports: [FormsModule], // Add FormsModule here
})
export class PopLoginComponent {
  userType: string = 'renter'; // Default user type
  email: string = '';
  password: string = '';

  handleUserTypeChange(type: string) {
    this.userType = type;
  }

  handleSubmit() {
    console.log('Form submitted', this.email, this.password);
  }
}
