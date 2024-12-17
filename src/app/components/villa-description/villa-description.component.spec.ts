import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaDescriptionComponent } from './villa-description.component';

describe('VillaDescriptionComponent', () => {
  let component: VillaDescriptionComponent;
  let fixture: ComponentFixture<VillaDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillaDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillaDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
