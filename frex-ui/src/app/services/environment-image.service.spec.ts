import { TestBed } from '@angular/core/testing';

import { EnvironmentImageService } from './environment-image.service';

describe('EnvironmentImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentImageService = TestBed.get(EnvironmentImageService);
    expect(service).toBeTruthy();
  });
});
