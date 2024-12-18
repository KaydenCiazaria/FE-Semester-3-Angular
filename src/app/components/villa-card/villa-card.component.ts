import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villa-card',
  standalone: true,
  imports: [],
  templateUrl: './villa-card.component.html',
  styleUrl: './villa-card.component.css'
})
export class VillaCardComponent {
  @Input() villa: any;

  constructor(private router: Router ){};

  openInfo() {
    this.router.navigate(['villa-info',this.villa.id]);
  }
}
