import { TestBed } from '@angular/core/testing';

import { OrdTypesService } from './ord-types.service';

describe('OrdTypesService', () => {
  let service: OrdTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
