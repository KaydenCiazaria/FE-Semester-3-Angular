import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDeleteComponent } from './pop-delete.component';

describe('PopDeleteComponent', () => {
  let component: PopDeleteComponent;
  let fixture: ComponentFixture<PopDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
