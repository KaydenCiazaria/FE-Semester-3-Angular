import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaInformationComponent } from './villa-information.component';

describe('VillaInformationComponent', () => {
  let component: VillaInformationComponent;
  let fixture: ComponentFixture<VillaInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillaInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
