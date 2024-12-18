import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationCardComponent } from '../../../components/notification-card/notification-card.component';

@Component({
  selector: 'app-notification',
  standalone: true, // Mark as standalone
  imports: [CommonModule, NotificationCardComponent], // Import dependencies
  templateUrl: './notification-renter.component.html',
  styleUrls: ['./notification-renter.component.css'],
})
export class NotificationRenterComponent {
  // Static villas array
  villas = [
    {
      type: 'reserved-villas',
      date: '5 December - 10 December 2024',
      title: 'Beauvida Villa',
      price: 'Rp. 200.000/Night',
      address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan',
    },
  ];
}
