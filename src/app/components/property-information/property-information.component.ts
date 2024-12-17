import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-information',
  standalone: true,
  templateUrl: './property-information.component.html',
  styleUrl: './property-information.component.css',
})
export class PropertyInformationComponent {
  @Input() property: any; // Property input passed to the component

  constructor(private router: Router) {}

  // Navigation handler methods
  handleAddProperty(): void {
    this.router.navigate(['/headerLoggedIn/propertyAdd'], {
      state: { type: 'Add Property' },
    });
  }

  handleEditProperty(): void {
    this.router.navigate([`/headerLoggedIn/propertyEdit/${this.property.id}`], {
      state: { property: this.property, type: 'Edit Property' },
    });
  }

  handleViewSchedule(): void {
    this.router.navigate([`/headerLoggedIn/PropertySchedule/${this.property.id}`], {
      state: { property: this.property, type: 'Schedule' },
    });
  }
}
