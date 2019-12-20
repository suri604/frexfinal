import { TestBed } from '@angular/core/testing';

import { GapiAuthService } from './gapi-auth.service';

describe('GapiAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GapiAuthService = TestBed.get(GapiAuthService);
    expect(service).toBeTruthy();
  });
});
