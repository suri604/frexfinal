import { TestBed } from '@angular/core/testing';

import { ActivityInfoService } from './activity-info.service';

describe('ActivityInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityInfoService = TestBed.get(ActivityInfoService);
    expect(service).toBeTruthy();
  });
});
