import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentPostDailytasksFormComponent } from './environment-post-dailytasks-form.component';

describe('EnvironmentPostDailytasksFormComponent', () => {
  let component: EnvironmentPostDailytasksFormComponent;
  let fixture: ComponentFixture<EnvironmentPostDailytasksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentPostDailytasksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentPostDailytasksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
