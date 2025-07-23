import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authReviewGuard } from './auth-review.guard';

describe('authReviewGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authReviewGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
