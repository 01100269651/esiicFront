import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authStocksGuard } from './auth-stocks.guard';

describe('authStocksGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authStocksGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
