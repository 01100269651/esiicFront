import { TestBed } from '@angular/core/testing';

import { ItmKindsService } from './itm-kinds.service';

describe('ItmKindsService', () => {
  let service: ItmKindsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItmKindsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
