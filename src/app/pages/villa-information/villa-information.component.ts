import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormReservationComponent } from '../../components/form/form-reservation/form-reservation.component'; // Import FormReservation

@Component({
  selector: 'app-villa-information',
  standalone: true,
  imports: [CommonModule, FormReservationComponent], // Include required modules and child components
  templateUrl: './villa-information.component.html',
  styleUrls: ['./villa-information.component.css'] // Correct plural 'styleUrls'
})
export class VillaInformationComponent {
  villa: any;

  constructor(private route: ActivatedRoute) {
    // Access state passed through the route
    const navigationState = this.route.snapshot.paramMap.get('state');
    this.villa = navigationState ? JSON.parse(navigationState) : {};
  }
}
