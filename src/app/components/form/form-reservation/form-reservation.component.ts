import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-reservation',
  standalone: true,
  imports: [],
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent implements OnInit {
  formData = {
    message: ''
  };

  villaId: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the route
    this.villaId = this.route.snapshot.paramMap.get('id');
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement | HTMLInputElement;
    const { name, value } = target;

    this.formData = { ...this.formData, [name]: value };
  }

  async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const token = localStorage.getItem('jwtToken');

    const fetchUserIdEndpoint = 'http://localhost:8080/api/users/auth/getusersId';
    const createReservationEndpoint = 'http://localhost:8080/api/reservation/create_reservation';

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });

    try {
      // Fetch User ID
      const userIdResponse: any = await this.http.post(fetchUserIdEndpoint, {}, { headers }).toPromise();

      if (!userIdResponse || !userIdResponse.data) {
        throw new Error('Failed to fetch User ID');
      }

      const userId = userIdResponse.data;

      // Submit Reservation
      await this.http.post(
        createReservationEndpoint,
        {
          reservation_status: true,
          villaId: this.villaId,
          userId: userId,
          message: this.formData.message
        },
        { headers }
      ).toPromise();

      console.log('Form submitted successfully');

    } catch (error) {
      console.error('Error occurred submitting form: ', error);
    }
  }
}
