import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VillaService } from '../../components/services/villa-service';
import { FormReservationComponent } from '../../components/form/form-reservation/form-reservation.component'; // Import FormReservation

@Component({
  selector: 'app-villa-information',
  standalone: true,
  imports: [CommonModule, FormReservationComponent], // Include required modules and child components
  templateUrl: './villa-information.component.html',
  styleUrls: ['./villa-information.component.css'] // Correct plural 'styleUrls'
})
export class VillaInformationComponent implements OnInit {
  villa: any;

  constructor(
    private route: ActivatedRoute,
    private villaService: VillaService
  ){}


  ngOnInit(): void {
      const villaId = this.route.snapshot.paramMap.get('id');
      if (villaId) {
        this.villa = this.villaService.getVillaById(villaId)
      }
  }
}
