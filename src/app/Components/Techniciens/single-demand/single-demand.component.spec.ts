import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDemandComponent } from './single-demand.component';

describe('SingleDemandComponent', () => {
  let component: SingleDemandComponent;
  let fixture: ComponentFixture<SingleDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDemandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
