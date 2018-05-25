import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { InstagramUrlsService } from '../../services/instagram-urls.service';
import { InstagramURL } from '../../models/instagramURL';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public instagramURL = {
    id: '',
    linkedURLs: []
  };

  constructor(private instagramUrlsService: InstagramUrlsService,
     private route: ActivatedRoute,
      private router: Router) { }

  public addLinkedURL(url: string): void {
    if (url !== '') {
      this.instagramURL.linkedURLs.push(url);
    }
  }

  public updateInstagramURL(id: string, linkedURLs: string[]): void {
    this.instagramUrlsService.updateInstagramURL(this.instagramURL).subscribe();
  }

  public removeLinkedURL(url): void {
    const index = this.instagramURL.linkedURLs.findIndex(linkedURL => linkedURL === url);
    this.instagramURL.linkedURLs.splice(index, 1);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.instagramUrlsService.getInstagramURL(id)
      .subscribe(instagramURL => this.instagramURL = instagramURL);
  }

}
