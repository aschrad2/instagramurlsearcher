import { Component, OnInit } from '@angular/core';
import { InstagramUrlsService } from '../../services/instagram-urls.service';
import { InstagramURL } from '../../models/instagramURL';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public url = '';
  public linkedURLs: string[] = [];

  constructor(private instagramUrlsService: InstagramUrlsService) { }

  public addLinkedURL(url: string): void {
    if (url !== '') {
      this.linkedURLs.push(url);
    }
  }

  public createInstagramURL(id: string, linkedURLs: string[]): void {
    this.instagramUrlsService.addInstagramURL({ id, linkedURLs } as InstagramURL).subscribe();
  }

  public removeLinkedURL(url): void {
    const index = this.linkedURLs.findIndex(linkedURL => linkedURL === url);
    this.linkedURLs.splice(index, 1);
  }

  ngOnInit() {
  }

}
