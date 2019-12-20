import { TestBed } from '@angular/core/testing';

import { CleanIndiaService } from './clean-india.service';

describe('CleanIndiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CleanIndiaService = TestBed.get(CleanIndiaService);
    expect(service).toBeTruthy();
  });
});
