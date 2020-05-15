import { TestBed } from '@angular/core/testing';

import { IShowImagesDataService } from './ishow-images-data.service';

describe('IShowImagesDataService', () => {
  let service: IShowImagesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IShowImagesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
