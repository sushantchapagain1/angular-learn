import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'All posts.';

  @Input() fromParent: string;

  postForChild = {
    id: 1,
    title: 'Post number 1',
    desc: 'Post number one description',
  };
  childMessageForParent = 'Child dekhi parent data flow using AfterViewInit';

  outputChildMessage = 'Child dekhi parent data flow using @Output decorator';

  // used when we need action sending data we can use in parent component.
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }

  constructor() {}

  ngOnInit(): void {}
}
