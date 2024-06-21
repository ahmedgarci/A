import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDBComponent } from './form-db.component';

describe('FormDBComponent', () => {
  let component: FormDBComponent;
  let fixture: ComponentFixture<FormDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
