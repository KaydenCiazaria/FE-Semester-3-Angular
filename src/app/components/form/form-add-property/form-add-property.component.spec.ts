import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPropertyComponent } from './form-add-property.component';

describe('FormAddPropertyComponent', () => {
  let component: FormAddPropertyComponent;
  let fixture: ComponentFixture<FormAddPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
