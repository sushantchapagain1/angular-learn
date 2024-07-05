import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements AfterViewInit {
  // userName: string;
  // textValue: string = 'lorem ipsum dolor sit amet';
  // handleKeyUp() {
  //   console.log(this.userName);
  // }
  // onKeyUp() {
  //   // when
  //   console.log(this.textValue);
  // }

  title: string;
  desc: string;
  imageUrl: string;
  openUrl: string;
  addBackground: boolean;

  ngAfterViewInit(): void {
    console.log(this.title, this.openUrl);
  }
}
