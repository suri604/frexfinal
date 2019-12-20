import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDetailsFormComponent } from './user-profile-details-form.component';

describe('UserProfileDetailsFormComponent', () => {
  let component: UserProfileDetailsFormComponent;
  let fixture: ComponentFixture<UserProfileDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
