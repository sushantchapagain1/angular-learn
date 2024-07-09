import { Component } from '@angular/core';

// 1. import from forms reactive form
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  form: any;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(32),
      ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern(this.emailRegex),
        Validators.email,
      ]),
      address: new FormControl('', Validators.required),
    });
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('address');
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
