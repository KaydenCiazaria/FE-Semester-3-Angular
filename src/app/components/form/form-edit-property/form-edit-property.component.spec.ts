import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPropertyComponent } from './form-edit-property.component';

describe('FormEditPropertyComponent', () => {
  let component: FormEditPropertyComponent;
  let fixture: ComponentFixture<FormEditPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
