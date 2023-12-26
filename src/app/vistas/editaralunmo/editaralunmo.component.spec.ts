import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaralunmoComponent } from './editaralunmo.component';

describe('EditaralunmoComponent', () => {
  let component: EditaralunmoComponent;
  let fixture: ComponentFixture<EditaralunmoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaralunmoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditaralunmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
