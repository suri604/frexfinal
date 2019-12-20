import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessFocusComponent } from './fitness-focus.component';

describe('FitnessFocusComponent', () => {
  let component: FitnessFocusComponent;
  let fixture: ComponentFixture<FitnessFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
