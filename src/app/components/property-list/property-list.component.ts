import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-list',
  standalone: true,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
})
export class PropertyListComponent {
  @Input() property: any; // Input property object passed from the parent
  @Output() onClick = new EventEmitter<any>(); // EventEmitter to handle clicks

  // Emit the property when the user clicks on it
  handleClick(): void {
    this.onClick.emit(this.property);
  }
}
