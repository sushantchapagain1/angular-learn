import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userName: string;

  textValue: string = 'lorem ipsum dolor sit amet';

  handleKeyUp() {
    console.log(this.userName);
  }
  onKeyUp() {
    // when
    console.log(this.textValue);
  }
}
