import { Component } from '@angular/core';

import {
  Validators,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})

// With out form builder makes bad code cz of multiple get and fromControls.
// export class ReactiveFormsComponent {
//   form: any;
//   emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
//   contactRegex: string = '[789][0-9]{9}';
//   constructor() {
//     this.form = new FormGroup({
//       fullName: new FormControl('', [
//         Validators.required,
//         Validators.minLength(5),
//         Validators.maxLength(32),
//       ]),
//       email: new FormControl('', [
//         Validators.required,
//         // Validators.pattern(this.emailRegex),
//         Validators.email,
//       ]),

//       contactDetails: new FormGroup({
//         // nested form control. adress bhitra multiple object rakhnu xa bhane.
//         address: new FormControl('', Validators.required),
//         shippingAddress: new FormControl('', Validators.required),
//         contactNo: new FormControl('', [
//           Validators.required,
//           Validators.pattern(this.contactRegex),
//         ]),
//       }),
//       skills: new FormArray([]),
//     });
//   }

//   get fullName() {
//     return this.form.get('fullName');
//   }

//   get email() {
//     return this.form.get('email');
//   }

//   get address() {
//     return this.form.get('contactDetails.address');
//   }

//   get shippingAddress() {
//     return this.form.get('contactDetails.shippingAddress');
//   }

//   get contactNo() {
//     return this.form.get('contactDetails.contactNo');
//   }

//   get skills() {
//     return this.form.get('skills') as FormArray;
//   }

//   addSkill(skill: HTMLInputElement) {
//     this.skills.push(new FormControl(skill.value));
//     skill.value = '';
//   }

//   removeSkill(index: number) {
//     this.skills.removeAt(index);
//   }

//   handleSubmit() {
//     console.log(this.form.value);
//   }
// }
export class ReactiveFormsComponent {
  contactRegex: string = '[789][0-9]{9}';
  form: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(32),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      // cannot use [] to nested
      contactDetails: fb.group({
        address: ['', Validators.required],
        shippingAddress: ['', Validators.required],
        contactNo: [
          '',
          [Validators.required, Validators.pattern(this.contactRegex)],
        ],
      }),
      // fb.array for array
      skills: fb.array([]),
    });
  }
  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('contactDetails.address');
  }

  get shippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get contactNo() {
    return this.form.get('contactDetails.contactNo');
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkill(skill: HTMLInputElement) {
    this.skills.push(new FormControl(skill.value));
    skill.value = '';
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
