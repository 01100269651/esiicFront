import { TestBed } from '@angular/core/testing';

import { SCMUnitService } from './scm-unit.service';

describe('SCMUnitService', () => {
  let service: SCMUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCMUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
