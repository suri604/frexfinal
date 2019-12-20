import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFocusComponent } from './volunteer-focus.component';

describe('VolunteerFocusComponent', () => {
  let component: VolunteerFocusComponent;
  let fixture: ComponentFixture<VolunteerFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
