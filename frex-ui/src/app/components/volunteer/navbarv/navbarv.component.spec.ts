import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarvComponent } from './navbarv.component';

describe('NavbarvComponent', () => {
  let component: NavbarvComponent;
  let fixture: ComponentFixture<NavbarvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
