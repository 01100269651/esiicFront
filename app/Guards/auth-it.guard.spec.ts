import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authItGuard } from './auth-it.guard';

describe('authItGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authItGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
