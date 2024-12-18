import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-are-you-sure',
  standalone: true,
  imports: [],
  templateUrl: './pop-are-you-sure.component.html',
  styleUrl: './pop-are-you-sure.component.css'
})

export class PopAreYouSureComponent {

  constructor(private router: Router) {};

  @Output() toggleModal = new EventEmitter<void>();

  handleLogout() {
    alert("You have logged out!");
    // API goes here or would
    this.router.navigate(['/'])
  }

  decline() {
    this.toggleModal.emit();
  }
}
