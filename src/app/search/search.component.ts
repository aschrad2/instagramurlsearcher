import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InstagramUrlsService } from '../services/instagram-urls.service';
import { InstagramURL } from '../models/instagramURL';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  urlFormControl = new FormControl('', [
    Validators.required,
  ]);

  linkedURLs: string[];

  constructor(private instagramUrlsService: InstagramUrlsService) { }

  public getInstagramUrl(url: string) {
    this.linkedURLs = [];
    if (url !== '') {
      this.instagramUrlsService.getInstagramURL(url)
        .subscribe(instagramURL => this.linkedURLs = instagramURL.linkedURLs);
    }
  }

  ngOnInit() {

  }

}
