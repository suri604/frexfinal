import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessPickActivityComponent } from './fitness-pick-activity.component';

describe('FitnessPickActivityComponent', () => {
  let component: FitnessPickActivityComponent;
  let fixture: ComponentFixture<FitnessPickActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessPickActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessPickActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
