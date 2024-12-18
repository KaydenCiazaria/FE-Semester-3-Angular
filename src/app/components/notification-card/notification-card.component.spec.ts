import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationCardComponent } from './notification-card.component';

describe('NotificationCardComponent', () => {
  let component: NotificationCardComponent;
  let fixture: ComponentFixture<NotificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCardComponent);
    component = fixture.componentInstance;
    component.villa = { title: 'Test Villa', type: 'reserved-villas' }; // Mock data
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display villa title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Test Villa');
  });

  it('should render button with "More Information!"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('More Information!');
  });
});
