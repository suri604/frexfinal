import { TestBed } from '@angular/core/testing';

import { CssconfigService } from './cssconfig.service';

describe('CssconfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CssconfigService = TestBed.get(CssconfigService);
    expect(service).toBeTruthy();
  });
});
