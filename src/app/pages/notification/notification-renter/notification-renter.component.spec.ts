import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRenterComponent } from './notification-renter.component';

describe('NotificationRenterComponent', () => {
  let component: NotificationRenterComponent;
  let fixture: ComponentFixture<NotificationRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationRenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
