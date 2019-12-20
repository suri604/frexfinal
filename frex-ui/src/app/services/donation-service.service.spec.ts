import { TestBed } from '@angular/core/testing';

import { DonationServiceService } from './donation-service.service';

describe('DonationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationServiceService = TestBed.get(DonationServiceService);
    expect(service).toBeTruthy();
  });
});
