import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterInformationComponent } from './renter-information.component';

describe('RenterInformationComponent', () => {
  let component: RenterInformationComponent;
  let fixture: ComponentFixture<RenterInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenterInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
