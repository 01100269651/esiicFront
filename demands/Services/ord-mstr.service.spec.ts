import { TestBed } from '@angular/core/testing';

import { OrdMstrService } from './ord-mstr.service';

describe('OrdMstrService', () => {
  let service: OrdMstrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdMstrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
