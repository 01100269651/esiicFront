import { TestBed } from '@angular/core/testing';

import { AuthGrpService } from './auth-grp.service';

describe('AuthGrpService', () => {
  let service: AuthGrpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGrpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
