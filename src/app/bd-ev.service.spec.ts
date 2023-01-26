import { TestBed } from '@angular/core/testing';

import { BdEvService } from './bd-ev.service';

describe('BdEvService', () => {
  let service: BdEvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdEvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
