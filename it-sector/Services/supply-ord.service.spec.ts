import { TestBed } from '@angular/core/testing';

import { SupplyOrdService } from './supply-ord.service';

describe('SupplyOrdService', () => {
  let service: SupplyOrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyOrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
