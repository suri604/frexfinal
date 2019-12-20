import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentHomeComponent } from './environment-home.component';

describe('EnvironmentHomeComponent', () => {
  let component: EnvironmentHomeComponent;
  let fixture: ComponentFixture<EnvironmentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
