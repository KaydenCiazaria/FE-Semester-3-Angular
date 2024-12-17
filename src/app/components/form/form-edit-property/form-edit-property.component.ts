import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-edit-property',
  standalone: true,
  templateUrl: './form-edit-property.component.html',
  styleUrls: ['./form-edit-property.component.css'],
  imports: [CommonModule]
})
export class FormEditPropertyComponent implements OnInit {
  formData = {
    villa_name: '',
    villa_desc: '',
    address: '',
    price: '',
    occupancy: 0,
    tags: '',
    locationName: '',
    imagePath: ''
  };

  error: string = '';
  showModal: boolean = false;
  villaId: string | null = null;
  token: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.villaId = this.route.snapshot.paramMap.get('id');
    this.token = localStorage.getItem('jwtToken');
    console.log(`Villa ID: ${this.villaId}, Token: ${this.token}`);
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    this.formData = { ...this.formData, [name]: value };
  }

  handleLocChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.formData.locationName = target.value;
  }

  handlePrice(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.replace(/[^0-9]/g, '');

    this.formData.price = value;
  }

  async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (!this.token) {
      this.error = 'No token found. Please log in.';
      return;
    }

    try {
      // Step 1: Get Villa Owner ID
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      });

      const ownerResponse: any = await this.http
        .post('/api/villa_owner/auth/getVillaOwnerId', { token: this.token }, { headers })
        .toPromise();

      const villaOwnerId = ownerResponse.data[0]?.toString();

      if (!villaOwnerId) {
        this.error = 'Failed to fetch villa owner ID.';
        return;
      }

      // Step 2: Update the villa
      const updateResponse = await this.http
        .put(
          `/api/villa/update_villa/${this.villaId}`,
          { ...this.formData },
          { headers }
        )
        .toPromise();

      console.log('Villa updated successfully:', updateResponse);
      this.router.navigate(['/headerLoggedIn/property']);
    } catch (err) {
      console.error('Error updating villa:', err);
      this.error = 'Failed to update villa. Please try again.';
    }
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  async handleDeleteConfirm(): Promise<void> {
    if (!this.token) {
      this.error = 'No token found. Please log in.';
      return;
    }

    try {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      });

      // Delete the villa
      const deleteResponse = await this.http
        .delete(`/api/villa/delete_villa/${this.villaId}`, { headers })
        .toPromise();

      console.log('Villa deleted successfully:', deleteResponse);
      this.router.navigate(['/headerLoggedIn/property']);
    } catch (err) {
      console.error('Error deleting villa:', err);
      this.error = 'Failed to delete villa. Please try again.';
    }
  }
}
