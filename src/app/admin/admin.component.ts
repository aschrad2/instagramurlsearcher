import { Component, OnInit } from '@angular/core';
import { InstagramUrlsService } from '../services/instagram-urls.service';
import { InstagramURL } from '../models/instagramURL';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  instagramURLs: InstagramURL[];
  displayedColumns = ['url', 'linkedURLs', 'actions'];

  constructor(private instagramUrlsService: InstagramUrlsService) { }

  public remove(url: string): void {
    this.instagramURLs = this.instagramURLs.filter(instagramURL => instagramURL.id !== url);

    this.instagramUrlsService.deleteInstagramURL(url).subscribe();
  }

  ngOnInit() {
    this.instagramUrlsService.getInstagramURLs().subscribe(instaURLs => this.instagramURLs = instaURLs);
  }

}
