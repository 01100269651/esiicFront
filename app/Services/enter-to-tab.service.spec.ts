import { TestBed } from '@angular/core/testing';

import { EnterToTabService } from './enter-to-tab.service';

describe('EnterToTabService', () => {
  let service: EnterToTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterToTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
