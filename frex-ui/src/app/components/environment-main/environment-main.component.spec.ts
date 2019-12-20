import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentMainComponent } from './environment-main.component';

describe('EnvironmentMainComponent', () => {
  let component: EnvironmentMainComponent;
  let fixture: ComponentFixture<EnvironmentMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
