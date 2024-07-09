import { Injectable } from '@angular/core';

export class PostInjectService {
  // The second solution is directly telling here in the services that it is provided  in root(all component are child of root).
  @Injectable({
    providedIn: 'root',
  })
  postList: Array<any> = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
    { id: 5, title: 'Post 5' },
  ];
}
