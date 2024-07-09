// import { Component, OnInit } from '@angular/core';

// import { PostService } from '../services/post.service';

// @Component({
//   selector: 'app-posts',
//   templateUrl: './posts.component.html',
//   styleUrl: './posts.component.css',
// })
// export class PostsComponent implements OnInit {
//   posts: Array<any>;

//   constructor() {
//     let postService = new PostService();
//     this.posts = postService.postList;
//   }
//   ngOnInit(): void {}
// }

import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  // after proving the service in the provider this component we can inject the service if not provided throws NullInjectorError.
  providers: [PostService],
})
export class PostsComponent implements OnInit {
  posts: Array<any>;

  // dependency injection. instead of creating a new instance of the service we accept the service in the constructor and assign.
  constructor(private postService: PostService) {
    this.posts = postService.postList;
  }
  ngOnInit(): void {}
}
