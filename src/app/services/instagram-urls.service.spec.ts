import { TestBed, inject } from '@angular/core/testing';

import { InstagramUrlsService } from './instagram-urls.service';

describe('InstagramUrlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramUrlsService]
    });
  });

  it('should be created', inject([InstagramUrlsService], (service: InstagramUrlsService) => {
    expect(service).toBeTruthy();
  }));
});
