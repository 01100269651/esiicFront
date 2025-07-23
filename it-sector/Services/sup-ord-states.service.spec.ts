import { TestBed } from '@angular/core/testing';

import { SupOrdStatesService } from './sup-ord-states.service';

describe('SupOrdStatesService', () => {
  let service: SupOrdStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupOrdStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
