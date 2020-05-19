import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  media_type: string;
  finalUrl: string = "https://images-assets.nasa.gov";
  formats: any;
  url: string = 'asset';

  constructor(private router: Router, private http: HttpClient, private urlService: UrlService) {
  }

  ngOnInit(): void {
    this.urlService.getUrl()
      .subscribe(url => this.url = url);

    this.http.get(this.url)
      .subscribe(response => {
        this.formats = (<any>response);
        if (this.formats.length > 0) {
          this.finalUrl = this.formats.find(format => format.includes('~orig'));
          if (this.finalUrl.includes('/image/'))
            this.media_type = 'image';
          else if (this.finalUrl.includes('/audio/'))
            this.media_type = 'audio';
          else if (this.finalUrl.includes('/video/'))
            this.media_type = 'video';
          else
            this.router.navigate(['/']);
        } else {
          this.router.navigate(['/']);
        }
      });
  }

}
