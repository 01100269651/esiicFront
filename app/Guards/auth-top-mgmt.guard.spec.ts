import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authTopMgmtGuard } from './auth-top-mgmt.guard';

describe('authTopMgmtGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authTopMgmtGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
