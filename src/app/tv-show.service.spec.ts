import { TestBed } from '@angular/core/testing';

import { TvShowService } from './tv-show.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('TvShowService', () => {
  let service: TvShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TvShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
