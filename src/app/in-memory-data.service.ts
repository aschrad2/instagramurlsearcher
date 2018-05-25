import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {
  createDb() {
    const instagramURLs = [
      {
        id: 'google.com',
        linkedURLs: ['example1.com', 'example2.com']
      },
      {
        id: 'google2.com',
        linkedURLs: ['example1.com', 'example2.com']
      },
      {
        id: 'google3.com',
        linkedURLs: ['example1.com', 'example2.com']
      }
    ];
    return { instagramURLs };
  }
}
