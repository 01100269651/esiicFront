import { TestBed } from '@angular/core/testing';

import { OrdItmService } from './ord-itm.service';

describe('OrdItmService', () => {
  let service: OrdItmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdItmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
