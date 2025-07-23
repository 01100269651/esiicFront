import { TestBed } from '@angular/core/testing';

import { ScmSystemConfigService } from './scm-system-config.service';

describe('ScmSystemConfigService', () => {
  let service: ScmSystemConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScmSystemConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
