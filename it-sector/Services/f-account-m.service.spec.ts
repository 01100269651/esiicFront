import { TestBed } from '@angular/core/testing';

import { FAccountMService } from './f-account-m.service';

describe('FAccountMService', () => {
  let service: FAccountMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FAccountMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
