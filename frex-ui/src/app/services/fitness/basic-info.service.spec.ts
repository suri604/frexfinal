import { TestBed } from '@angular/core/testing';

import { BasicInfoService } from './basic-info.service';

describe('FitnessBasicinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicInfoService = TestBed.get(BasicInfoService);
    expect(service).toBeTruthy();
  });
});
