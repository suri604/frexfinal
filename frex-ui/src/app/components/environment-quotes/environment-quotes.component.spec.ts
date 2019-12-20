import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentQuotesComponent } from './environment-quotes.component';

describe('EnvironmentQuotesComponent', () => {
  let component: EnvironmentQuotesComponent;
  let fixture: ComponentFixture<EnvironmentQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
