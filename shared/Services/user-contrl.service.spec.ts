import { TestBed } from '@angular/core/testing';

import { UserContrlService } from './user-contrl.service';

describe('UserContrlService', () => {
  let service: UserContrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserContrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
