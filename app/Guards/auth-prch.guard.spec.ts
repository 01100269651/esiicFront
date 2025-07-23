import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authPrchGuard } from './auth-prch.guard';

describe('authPrchGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authPrchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
