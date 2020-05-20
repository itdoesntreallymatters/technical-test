import { TestBed } from '@angular/core/testing';

import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the following url: \'https://images-api.nasa.gov\'', (done) => {
    service.getUrl().subscribe(url => {
      expect(url).toEqual("https://images-api.nasa.gov");
      done();
    });
  });

  it('should modify the content of url', (done) => {
    service.setUrl('Just a test');
    service.getUrl().subscribe(url => {
      expect(url).toEqual("Just a test");
      done();
    });
  });
});
