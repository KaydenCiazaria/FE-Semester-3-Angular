import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';  // Import the SearchBar component
import { AuthButtonsComponent } from '../auth-buttons/auth-buttons.component';  // Import the AuthButtons component

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, AuthButtonsComponent],  // Include the imported components
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }

  navigateToRegister() {
    this.router.navigate(['/headerPlain/register']);
  }
}
