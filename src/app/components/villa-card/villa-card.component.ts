import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-villa-card',
  standalone: true,
  imports: [],
  templateUrl: './villa-card.component.html',
  styleUrl: './villa-card.component.css'
})
export class VillaCardComponent {
  @Input() villa: any;
}
