import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationOwnerComponent } from './notification-owner.component';

describe('NotificationOwnerComponent', () => {
  let component: NotificationOwnerComponent;
  let fixture: ComponentFixture<NotificationOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
