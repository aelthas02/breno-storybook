import { TestBed } from '@angular/core/testing';

import { WindowsSizeService } from './window-size.service';

describe('WindowsSizeService', () => {
  let service: WindowsSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
