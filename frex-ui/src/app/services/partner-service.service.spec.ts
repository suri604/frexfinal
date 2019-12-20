import { TestBed } from '@angular/core/testing';

import { PartnerServiceService } from './partner-service.service';

describe('PartnerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnerServiceService = TestBed.get(PartnerServiceService);
    expect(service).toBeTruthy();
  });
});
