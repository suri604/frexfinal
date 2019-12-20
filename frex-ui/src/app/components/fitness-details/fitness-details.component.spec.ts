import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessDetailsComponent } from './fitness-details.component';

describe('FitnessDetailsComponent', () => {
  let component: FitnessDetailsComponent;
  let fixture: ComponentFixture<FitnessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
