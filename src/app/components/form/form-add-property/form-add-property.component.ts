import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FormData {
  villaName: string;
  villaDesc: string;
  address: string;
  price: string;
  occupancy: number;
  tags: string;
  locationName: string;
  photo: string;
}

@Component({
  selector: 'app-form-add-property',
  templateUrl: './form-add-property.component.html',
  styleUrls: ['./form-add-property.component.css']
})
export class FormAddPropertyComponent {
  formData: FormData = {
    villaName: '',
    villaDesc: '',
    address: '',
    price: '',
    occupancy: 0,
    tags: '',
    locationName: '',
    photo: ''
  };

  locations: string[] = ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'];

  constructor(private http: HttpClient) {}

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    this.formData = { ...this.formData, [name]: value };
  }

  handleLocChange(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    this.formData.locationName = value;
  }

  handlePrice(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const value = input.replace(/[^0-9]/g, '');
    this.formData.price = value;
  }

  formatCurrency(value: string): string {
    const numericValue = value.replace(/[^0-9]/g, '');
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(parseInt(numericValue || '0', 10));
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    const token = localStorage.getItem('jwtToken');
    const fetchIdEndpoint = 'http://localhost:8080/api/villa_owner/auth/getVillaOwnerId';
    const formSubmitEndpoint = 'http://localhost:8080/api/villa/create_villa';
    const formattedPrice = this.formatCurrency(this.formData.price);

    try {
      const userIdResponse: any = await this.http.post(fetchIdEndpoint, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).toPromise();

      const userId = userIdResponse.data;

      await this.http.post(formSubmitEndpoint, {
        villa_name: this.formData.villaName,
        villa_desc: this.formData.villaDesc,
        address: this.formData.address,
        price: formattedPrice,
        occupancy: this.formData.occupancy,
        villaOwnerid: userId,
        locationName: this.formData.locationName,
        imagePath: this.formData.photo
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).toPromise();

      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error occurred submitting form:', error);
    }
  }
}
