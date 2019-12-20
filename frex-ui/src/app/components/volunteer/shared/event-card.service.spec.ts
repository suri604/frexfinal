import { TestBed } from '@angular/core/testing';

import { EventCardService } from './event-card.service';

describe('EventCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCardService = TestBed.get(EventCardService);
    expect(service).toBeTruthy();
  });
});
