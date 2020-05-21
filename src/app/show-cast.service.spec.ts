import { TestBed } from '@angular/core/testing';

import { ShowCastService } from './show-cast.service';

describe('ShowCastService', () => {
  let service: ShowCastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
