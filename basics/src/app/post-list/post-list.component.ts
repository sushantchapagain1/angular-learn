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
  imageUrl: string =
    'https://testsigma.com/blog/wp-content/uploads/Random-Testing-In-Software-Testing-An-Overview.png';

  shouldBeTeal: boolean = true;
  largeFontSize: string = '32px';

  eventBindingAngular() {
    console.log('Button clicked event.');
  }

  handleKeyUp(e: KeyboardEvent) {
    if (e.keyCode === 13 && e.key === 'Enter') {
      console.log('Enter pressed..');
    }
  }

  handleKeyUpEventFiltering(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    console.log(inputElement.value);
  }

  templateVariable(val: string) {
    console.log(val);
  }
}
