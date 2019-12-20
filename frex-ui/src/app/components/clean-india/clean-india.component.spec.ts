import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanIndiaComponent } from './clean-india.component';

describe('CleanIndiaComponent', () => {
  let component: CleanIndiaComponent;
  let fixture: ComponentFixture<CleanIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
