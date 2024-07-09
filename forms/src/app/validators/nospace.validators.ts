import { AbstractControl, ValidationErrors } from '@angular/forms';

export class noSpace {
  static noSpaceValidations(control: AbstractControl): ValidationErrors | null {
    // control contans all valuees like valid errrors and all.
    const controlValue = control.value as string;
    if (controlValue.indexOf(' ') >= 0) {
      return { noSpaceValidator: true };
    } else {
      return null;
    }
  }
}
