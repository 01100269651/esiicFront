import { TestBed } from '@angular/core/testing';

import { OrdStatesService } from './ord-states.service';

describe('OrdStatesService', () => {
  let service: OrdStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
