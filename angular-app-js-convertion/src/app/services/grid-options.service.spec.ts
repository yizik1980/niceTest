import { TestBed } from '@angular/core/testing';

import { GridOptionsService } from './grid-options.service';

describe('GridOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridOptionsService = TestBed.get(GridOptionsService);
    expect(service).toBeTruthy();
  });
});
