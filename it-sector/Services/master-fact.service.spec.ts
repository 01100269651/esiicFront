import { TestBed } from '@angular/core/testing';

import { MasterFactService } from './master-fact.service';

describe('MasterFactService', () => {
  let service: MasterFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
