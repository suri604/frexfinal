import { TestBed } from '@angular/core/testing';

import { EnvironmentTicketService } from './environment-ticket.service';

describe('EnvironmentTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentTicketService = TestBed.get(EnvironmentTicketService);
    expect(service).toBeTruthy();
  });
});
