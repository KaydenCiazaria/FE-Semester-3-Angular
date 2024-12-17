import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() type: 'default' | 'loggedIn' | 'plain' = 'default'; // Type of header
  @Input() userName: string | null = null; // Display name for logged-in header

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  handleNotification(): void {
    const currentPath = this.router.url;
    if (currentPath.startsWith('/headerLoggedIn/property')) {
      this.navigateTo('/headerLoggedIn/notificationOwner');
    } else {
      this.navigateTo('/headerLoggedIn/notificationRenter');
    }
  }

  handleLogoClick(): void {
    this.router.navigate(['/']);
  }
}
