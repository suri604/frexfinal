import { TestBed } from '@angular/core/testing';

import { EnvironmentAdminService } from './environment-admin.service';

describe('EnvironmentAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvironmentAdminService = TestBed.get(EnvironmentAdminService);
    expect(service).toBeTruthy();
  });
});
