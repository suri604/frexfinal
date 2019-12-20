import { TestBed } from '@angular/core/testing';

import { ClaimRewardsService } from './claim-rewards.service';

describe('ClaimRewardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimRewardsService = TestBed.get(ClaimRewardsService);
    expect(service).toBeTruthy();
  });
});
