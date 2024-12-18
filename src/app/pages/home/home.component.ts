import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaCardComponent } from '../../components/villa-card/villa-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VillaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
