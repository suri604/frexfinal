import { TestBed } from '@angular/core/testing';

import { EnvironmentDonateService } from './environment-donate.service';

describe('EnvironmentDonateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentDonateService = TestBed.get(EnvironmentDonateService);
    expect(service).toBeTruthy();
  });
});
