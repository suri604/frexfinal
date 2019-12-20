import { TestBed } from '@angular/core/testing';

import { FavouriteInfoService } from './favourite-info.service';

describe('FavoutiteInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteInfoService = TestBed.get(FavouriteInfoService);
    expect(service).toBeTruthy();
  });
});
