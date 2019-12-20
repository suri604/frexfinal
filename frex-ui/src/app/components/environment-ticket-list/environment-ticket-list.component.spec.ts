import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentTicketListComponent } from './environment-ticket-list.component';

describe('EnvironmentTicketListComponent', () => {
  let component: EnvironmentTicketListComponent;
  let fixture: ComponentFixture<EnvironmentTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentTicketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
