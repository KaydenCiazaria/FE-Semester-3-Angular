import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaCardGridComponent } from './villa-card-grid.component';

describe('VillaCardGridComponent', () => {
  let component: VillaCardGridComponent;
  let fixture: ComponentFixture<VillaCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillaCardGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillaCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
