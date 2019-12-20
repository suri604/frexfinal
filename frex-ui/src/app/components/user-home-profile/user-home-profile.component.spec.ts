import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeProfileComponent } from './user-home-profile.component';

describe('UserHomeProfileComponent', () => {
  let component: UserHomeProfileComponent;
  let fixture: ComponentFixture<UserHomeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
