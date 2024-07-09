import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrl: './ng-form.component.css',
})
export class NgFormComponent {
  handleSubmit(f: NgForm) {
    console.log(f);
  }
  getValue(f: NgModel) {
    console.log(f);
  }
}
