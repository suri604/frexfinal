import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentDashboardProfileComponent } from './environment-dashboard-profile.component';

describe('EnvironmentDashboardProfileComponent', () => {
  let component: EnvironmentDashboardProfileComponent;
  let fixture: ComponentFixture<EnvironmentDashboardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentDashboardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentDashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
