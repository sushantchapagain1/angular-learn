import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrl: './custom-validation.component.css',
})
export class CustomValidationComponent {
  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          // custom validation.
          noSpace.noSpaceValidations,
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  get fc() {
    return this.form.controls;
  }
}
