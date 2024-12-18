import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillaCardComponent } from '../../components/villa-card/villa-card.component';
import { VillaService } from '../../components/services/villa-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VillaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  villas: any;

  constructor(private villaService: VillaService) {};

  ngOnInit(): void {
      this.villas = this.villaService.getVillas();
}

}
