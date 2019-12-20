import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvMainCleanComponent } from './env-main-clean.component';

describe('EnvMainCleanComponent', () => {
  let component: EnvMainCleanComponent;
  let fixture: ComponentFixture<EnvMainCleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvMainCleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvMainCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
