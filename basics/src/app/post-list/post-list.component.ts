import { Component, Input } from '@angular/core';

type TPost = {
  id: number;
  title: string;
  desc: string;
};

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() post: TPost;
}
