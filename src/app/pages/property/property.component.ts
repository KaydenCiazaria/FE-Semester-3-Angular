import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Property interface for better type safety
interface Property {
  id: number;
  title: string;
  tags: string;
  address: string;
  price: string;
  occupancy: number;
  availableDate: string;
  imgpath: string;
  villarating: number;
  villacomment: string;
  location: string;
}

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  error: string = '';
  properties: Property[] = [];
  selectedProperty: Property | null = null;

  // Sample image paths
  villaImages = [
    'assets/images/VillaExample1.jpg',
    'assets/images/VillaExample2.jpg',
    'assets/images/VillaExample3.webp',
    'assets/images/VillaExample4.avif',
    'assets/images/VillaExample5.webp',
  ];

  ngOnInit(): void {
    // Simulating API data
    this.fetchProperties();
  }

  fetchProperties(): void {
    // Replace this data as if it came from an API
    const sampleData = [
      {
        id: 1,
        villa_name: 'Luxury Villa 1',
        villa_desc: 'A beautiful seaside villa',
        address: '123 Beachside Avenue',
        price: '$500/night',
        occupancy: 6,
        availableDate: '2024-01-01',
        imagePath: ['1'],
        review_rating: 4.8,
        review_comment: 'Excellent property!',
        locationName: 'Malibu',
      },
      {
        id: 2,
        villa_name: 'Modern Villa 2',
        villa_desc: 'Spacious villa with pool',
        address: '456 Modern Drive',
        price: '$400/night',
        occupancy: 8,
        availableDate: '2024-02-15',
        imagePath: ['2'],
        review_rating: 4.5,
        review_comment: 'Amazing stay!',
        locationName: 'Los Angeles',
      },
      // Add more sample villas if needed
    ];

    // Map data to match Property interface
    this.properties = sampleData.map((villa) => ({
      id: villa.id,
      title: villa.villa_name,
      tags: villa.villa_desc,
      address: villa.address,
      price: villa.price,
      occupancy: villa.occupancy,
      availableDate: villa.availableDate,
      imgpath:
        villa.imagePath[0] === '1'
          ? this.villaImages[3]
          : villa.imagePath[0] === '2'
          ? this.villaImages[4]
          : villa.imagePath[0] === '3'
          ? this.villaImages[2]
          : this.villaImages[0], // Fallback image
      villarating: villa.review_rating,
      villacomment: villa.review_comment,
      location: villa.locationName,
    }));

    if (this.properties.length > 0) {
      this.selectedProperty = this.properties[0];
    } else {
      this.error = 'Please add your property.';
    }
  }

  handleNext(): void {
    if (!this.selectedProperty || this.properties.length === 0) return;
    const currentIndex = this.properties.indexOf(this.selectedProperty);
    const nextIndex = (currentIndex + 1) % this.properties.length;
    this.selectedProperty = this.properties[nextIndex];
  }

  handlePrev(): void {
    if (!this.selectedProperty || this.properties.length === 0) return;
    const currentIndex = this.properties.indexOf(this.selectedProperty);
    const prevIndex = (currentIndex - 1 + this.properties.length) % this.properties.length;
    this.selectedProperty = this.properties[prevIndex];
  }
}
