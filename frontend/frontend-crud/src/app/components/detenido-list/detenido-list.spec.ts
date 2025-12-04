import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetenidoListComponent } from './detenido-list';

describe('DetenidoListComponent', () => {
  let component: DetenidoListComponent;
  let fixture: ComponentFixture<DetenidoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetenidoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetenidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
