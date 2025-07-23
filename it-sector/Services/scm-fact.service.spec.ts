import { TestBed } from '@angular/core/testing';

import { SCMFactService } from './scm-fact.service';

describe('SCMFactService', () => {
  let service: SCMFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCMFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
