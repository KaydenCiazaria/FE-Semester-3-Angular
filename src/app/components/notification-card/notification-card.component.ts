import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-card',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Import necessary modules
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css'],
})
export class NotificationCardComponent {
  @Input() villa: any;
  isModalOpen: boolean = false;

  // Open the modal
  handleOpenModal(): void {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Determine button action
  buttonFunction(): void {
    if (this.villa?.type === 'villa-approval') {
      this.handleOpenModal();
    } else {
      // Navigate programmatically
      window.location.href = `/headerLoggedIn/reservationDetail`;
    }
  }

  // Determine if modal should render
  renderModal(): boolean {
    return this.villa?.type === 'villa-approval';
  }
}
