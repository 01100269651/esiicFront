import { TestBed } from '@angular/core/testing';

import { OldHistoryService } from './old-history.service';

describe('OldHistoryService', () => {
  let service: OldHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
