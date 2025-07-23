import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authStocksCalGuard } from './auth-stocks-cal.guard';

describe('authStocksCalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authStocksCalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
