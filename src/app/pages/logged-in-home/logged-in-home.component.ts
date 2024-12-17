import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaCardComponent } from '../../components/villa-card/villa-card.component';

@Component({
  selector: 'app-logged-home',
  standalone: true,
  imports: [CommonModule, VillaCardComponent],
  templateUrl: './logged-in-home.component.html',
  styleUrl: './logged-in-home.component.css'
})
export class LoggedInHomeComponent {

  villas = [
    {
      id: '1051258106',
      imagePath: '1',
      title: 'Excitement Villa',
      price: '$57,000.00',
      rating: 5,
      address: '123 Awesome Lane, Awesome Town',
      tags: 'A refreshing stay at an exciting villa!'
    }
  ]

}
