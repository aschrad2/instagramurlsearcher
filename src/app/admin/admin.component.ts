import { Component, OnInit } from '@angular/core';
import { InstagramUrlsService } from '../services/instagram-urls.service';
import { InstagramURL } from '../models/instagramURL';
import { Observable } from 'rxjs/Observable';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // MatPaginator Output
  public pageEvent: PageEvent;
  public instagramURLs: InstagramURL[];
  public dataSource: any;
  public displayedColumns = ['url', 'linkedURLs', 'actions'];
  public pageSize = 10;
  public pageSizeOptions = [5, 10, 20];
  public currentPage = 0;
  public totalSize = 0;
  public length = 0;

  constructor(private instagramUrlsService: InstagramUrlsService) { }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.instagramURLs.slice(start, end);
    this.dataSource = part;
  }

  public remove(url: string): void {
    this.instagramURLs = this.instagramURLs.filter(instagramURL => instagramURL.id !== url);

    this.instagramUrlsService.deleteInstagramURL(url).subscribe();
  }

  ngOnInit() {
    this.instagramUrlsService.getInstagramURLs().subscribe(instaURLs => {
        this.instagramURLs = instaURLs;
        this.iterator();
        this.length = instaURLs.length;
      });
  }

}
