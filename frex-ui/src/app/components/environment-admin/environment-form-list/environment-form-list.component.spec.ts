import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentFormListComponent } from './environment-form-list.component';

describe('EnvironmentFormListComponent', () => {
  let component: EnvironmentFormListComponent;
  let fixture: ComponentFixture<EnvironmentFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
