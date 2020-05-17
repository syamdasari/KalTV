import { TestBed } from '@angular/core/testing';

import { ShowSampleImagesService } from './show-sample-images.service';

describe('ShowSampleImagesService', () => {
  let service: ShowSampleImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSampleImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
