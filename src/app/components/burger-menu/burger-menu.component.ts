import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PopAreYouSureComponent } from '../popups/pop-are-you-sure/pop-are-you-sure.component';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, PopAreYouSureComponent],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})

export class BurgerMenuComponent {

  isOpen: boolean = false;
  logoutModal: boolean = false;

  constructor(private router: Router){}

  handleMenuClick() {
    this.isOpen = !this.isOpen;
  }

  handleMenuClose() {
    this.isOpen = false;
  }

  @Output() onLogoutClick = new EventEmitter<boolean>();

  toggleLogoutModal() {
    this.logoutModal = !this.logoutModal;
    console.log(`logoutModal is now: ${this.logoutModal}`)
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }

}
