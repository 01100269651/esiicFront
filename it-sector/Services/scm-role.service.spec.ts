import { TestBed } from '@angular/core/testing';

import { SCMRoleService } from './scm-role.service';

describe('SCMRoleService', () => {
  let service: SCMRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCMRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
