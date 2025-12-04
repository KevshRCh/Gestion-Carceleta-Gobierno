import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetenidoDetailComponent } from './detenido-detail';

describe('DetenidoDetailComponent', () => {
  let component: DetenidoDetailComponent;
  let fixture: ComponentFixture<DetenidoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetenidoDetailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DetenidoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
