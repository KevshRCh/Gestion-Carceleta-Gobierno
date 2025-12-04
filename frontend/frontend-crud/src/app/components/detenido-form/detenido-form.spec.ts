import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DetenidoFormComponent } from './detenido-form';

describe('DetenidoFormComponent', () => {
  let component: DetenidoFormComponent;
  let fixture: ComponentFixture<DetenidoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetenidoFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DetenidoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
