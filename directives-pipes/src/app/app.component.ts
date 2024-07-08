import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directive';

  posts: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  arrayWithObject: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
  ];

  stepForm: string;

  addNewPost() {
    this.arrayWithObject.push({ id: 6, postTitle: 'Post 6' });
  }
  handleDeletePost(id: string) {
    this.arrayWithObject = this.arrayWithObject.filter(
      (post) => post.id !== id
    );
  }

  handleStepClick(step: string) {
    console.log(step);
    this.stepForm = step;
  }
}
