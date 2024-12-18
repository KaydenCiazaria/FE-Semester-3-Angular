import { Component } from '@angular/core';
import { AuthButtonsComponent } from '../auth-buttons/auth-buttons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AuthButtonsComponent],  // Add AuthButtonsComponent here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
