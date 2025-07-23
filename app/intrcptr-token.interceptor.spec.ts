import { TestBed } from '@angular/core/testing';

import { IntrcptrTokenInterceptor } from './intrcptr-token.interceptor';

describe('IntrcptrTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntrcptrTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntrcptrTokenInterceptor = TestBed.inject(IntrcptrTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
