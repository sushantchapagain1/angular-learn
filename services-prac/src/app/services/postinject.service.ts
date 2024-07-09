import { Injectable } from '@angular/core';
import { Post } from '../models/post';

// The second solution is directly telling here in the services that it is provided  in root(all component are child of root).
@Injectable({
  providedIn: 'root',
})
export class PostInjectService {
  postList: Array<Post> = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
    { id: 5, title: 'Post 5' },
  ];

  addNewPost(post: Post) {
    this.postList.push(post);
  }
}
