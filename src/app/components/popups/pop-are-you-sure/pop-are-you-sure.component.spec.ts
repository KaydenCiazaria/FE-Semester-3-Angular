import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopAreYouSureComponent } from './pop-are-you-sure.component';

describe('PopAreYouSureComponent', () => {
  let component: PopAreYouSureComponent;
  let fixture: ComponentFixture<PopAreYouSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopAreYouSureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopAreYouSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
