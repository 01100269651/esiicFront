import { TestBed } from '@angular/core/testing';

import { InSTOKService } from './in-stok.service';

describe('InSTOKService', () => {
  let service: InSTOKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InSTOKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
