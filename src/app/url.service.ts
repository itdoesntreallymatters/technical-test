import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private url: string = 'https://images-api.nasa.gov';

  constructor() { }

  getUrl(): Observable<string> {
    return of(this.url);
  }

  setUrl(url: string) {
    this.url = url;
  }
}
