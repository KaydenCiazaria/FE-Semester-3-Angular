import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Add this import

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  standalone: true,
  imports: [FormsModule]  // Add this line in imports
})
export class FormRegisterComponent {
  formData = {
    role: 'renter',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  handleRoleChange(role: string) {
    this.formData.role = role;
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    this.formData[name as keyof typeof this.formData] = value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    let endpoint = '';
    if (this.formData.role === 'renter') {
      endpoint = 'http://localhost:8080/api/users/register';
    } else {
      endpoint = 'http://localhost:8080/api/villa_owner/register';
    }

    this.http.post(endpoint, {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
      phone_num: this.formData.phone,
      password: this.formData.password
    }).subscribe({
      next: (response) => {
        console.log('Form submitted successfully', response);
      },
      error: (error) => {
        console.error('An error occurred while sending form data: ', error);
      }
    });
  }
}
