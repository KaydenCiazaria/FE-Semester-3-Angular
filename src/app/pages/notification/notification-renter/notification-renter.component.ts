import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification-renter.component.html',
  styleUrls: ['./notification-renter.component.css']
})
export class NotificationComponent {
  // Static villas array
  villas = [
    {
      type: 'reserved-villas',
      date: '5 December - 10 December 2024',
      title: 'Beauvida Villa',
      price: 'Rp. 200.000/Night',
      address: 'Jl. Prasopaca Raya no.20, Kebayoran Baru, Jakarta Selatan'
    },
  ];
}
