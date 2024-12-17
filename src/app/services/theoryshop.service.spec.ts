import { TestBed } from '@angular/core/testing';

import { TheoryshopService } from './theoryshop.service';

describe('TheoryshopService', () => {
  let service: TheoryshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheoryshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
