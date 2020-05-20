import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { AssetComponent } from './asset.component';
import { UrlService } from '../url.service';

describe('AssetComponent', () => {
  let component: AssetComponent;
  let fixture: ComponentFixture<AssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssetComponent],
      imports: [AppRoutingModule, HttpClientModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the url from the service', (done) => {
    let service: UrlService = fixture.debugElement.injector.get(UrlService);
    service.getUrl().subscribe(url => {
      expect(component.url).toEqual(url);
      done();
    })
  });

  it('should render an image when media_type equal \'image\'', () => {
    component.media_type = "image";
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should render an image when media_type equal \'tif\'', () => {
    component.media_type = "tif";
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a')).toBeTruthy();
  });

  it('should render an audio when media_type equal \'audio\'', () => {
    component.media_type = "audio";
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('audio')).toBeTruthy();
  });

  it('should render a video when media_type equal \'video\'', () => {
    component.media_type = "video";
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('video')).toBeTruthy();
  });
});
