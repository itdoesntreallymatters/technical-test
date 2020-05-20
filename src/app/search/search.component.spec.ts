import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './search.component';
import { UrlService } from '../url.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
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

  it('shouldn\'t execute the http request if searchParameter has no value', () => {
    component.onSearch();
    fixture.detectChanges();
    expect(component.isCollapsed.filter(bool => !bool).length).toEqual(0);
  })
});
