import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  readonly ROOT_URL: string = 'https://images-api.nasa.gov';
  images: any;
  searchParameter: string;
  url: string = 'search';
  isCollapsed: Array<boolean> = [];

  constructor(private http: HttpClient, private urlService: UrlService) {
  }

  ngOnInit(): void {
    this.urlService.getUrl()
      .subscribe(url => this.url = url);
  }

  onSearch() {
    for (let i = 0; i < 100; i++) {
      this.isCollapsed[i] = true;
    }
    if (this.searchParameter) {
      let params = new HttpParams().set('q', this.searchParameter)
      this.http.get(this.ROOT_URL + '/search', { params })
        .subscribe(response => {
          this.images = (<any>response).collection.items;
          console.log("Response:", this.images);
        });
    }
  }

  onPageChange(index: number) {
    this.urlService.setUrl(this.images[index].href);
  }

}
