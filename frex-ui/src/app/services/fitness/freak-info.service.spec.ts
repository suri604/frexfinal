import { TestBed } from '@angular/core/testing';

import { FreakInfoService } from './freak-info.service';

describe('FreakInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreakInfoService = TestBed.get(FreakInfoService);
    expect(service).toBeTruthy();
  });
});
