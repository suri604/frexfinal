import { TestBed } from '@angular/core/testing';

import { CalorieInfoService } from './calorie-info.service';

describe('CalorieInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalorieInfoService = TestBed.get(CalorieInfoService);
    expect(service).toBeTruthy();
  });
});
