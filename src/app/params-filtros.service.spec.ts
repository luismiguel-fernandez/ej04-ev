import { TestBed } from '@angular/core/testing';

import { ParamsFiltrosService } from './params-filtros.service';

describe('ParamsFiltrosService', () => {
  let service: ParamsFiltrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamsFiltrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
