import { TestBed } from '@angular/core/testing';

import { FitInfoService } from './fit-info.service';

describe('FitInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitInfoService = TestBed.get(FitInfoService);
    expect(service).toBeTruthy();
  });
});
