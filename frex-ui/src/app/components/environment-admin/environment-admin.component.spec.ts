import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentAdminComponent } from './environment-admin.component';

describe('EnvironmentAdminComponent', () => {
  let component: EnvironmentAdminComponent;
  let fixture: ComponentFixture<EnvironmentAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
