import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pop-verification',
  templateUrl: './pop-verification.component.html',
  styleUrls: ['./pop-verification.component.css'],
  standalone: true,
  imports: [FormsModule] // Add FormsModule here
})
export class PopVerificationComponent {
  verifyCode: string = '';
  rating: number = 3; // Default slider value

  constructor(private http: HttpClient) {}

  closeModal() {
    console.log('Modal closed');
  }

  handleSliderChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rating = parseInt(input.value, 10);
  }

  async handleSubmit(event: Event) {
    event.preventDefault();

    const token = localStorage.getItem('jwtToken');
    const endpoint = 'http://localhost:8080/api/reservation/verifyReview';

    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      });

      const body = {
        verification_code: this.verifyCode,
        user_rate: this.rating
      };

      const response = await this.http.post(endpoint, body, { headers }).toPromise();

      console.log('Rating Submitted');
      alert('Reservation verified!');
      this.closeModal();

    } catch (error) {
      console.error(`Error submitting form: ${error}`);
      alert('Reservation not found, please double check the verification code.');
    }
  }
}
