import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillaService {
  private villas = [
    {
      id: '1051258106',
      imagePath: '1',
      title: 'Excitement Villa',
      price: '$57,000.00',
      rating: 5,
      address: '123 Awesome Lane, Awesome Town',
      tags: 'A refreshing stay at an exciting villa!'
    },
    {
      id: '2051258107',
      imagePath: '2',
      title: 'Horror Villa',
      price: '$85,000.00',
      rating: 4.5,
      address: '456 Freaky Drive, Frighton City',
      tags: 'A spoomky stay at a haunted villa!'
    }
  ];

  getVillaById(id: string): any {
    return this.villas.find(villa => villa.id === id);
  }

  getVillas(): any {
    return this.villas;
  }
}
