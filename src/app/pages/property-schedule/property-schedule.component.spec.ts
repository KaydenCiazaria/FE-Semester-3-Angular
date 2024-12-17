import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyScheduleComponent } from './property-schedule.component';

describe('PropertyScheduleComponent', () => {
  let component: PropertyScheduleComponent;
  let fixture: ComponentFixture<PropertyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
