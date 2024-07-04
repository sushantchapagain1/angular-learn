import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title: string = 'basics';

  parentToChildData: string =
    'Angular ma data flow from parent to child using @Input decorator.';

  childMessageToParent: string;

  // Getting data from the child component...
  @ViewChild(PostComponent) postChildComponent: PostComponent | undefined =
    undefined;

  constructor(private cdr: ChangeDetectorRef) {
    // constructor function class create hunebela ma nei call hunxa tesaile child component is undefined.
  }

  ngAfterViewInit() {
    if (this.postChildComponent) {
      this.childMessageToParent = this.postChildComponent.childMessageForParent;
      this.cdr.detectChanges();
    }
  }

  // getting data from the child component by firing event in the child component.
  receiveMessage($event: string) {
    console.log($event);
  }
}
