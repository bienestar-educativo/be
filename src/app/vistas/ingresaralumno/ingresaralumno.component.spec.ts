import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresaralumnoComponent } from './ingresaralumno.component';

describe('IngresaralumnoComponent', () => {
  let component: IngresaralumnoComponent;
  let fixture: ComponentFixture<IngresaralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresaralumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngresaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
