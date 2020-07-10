import { ValidatorFn, AbstractControl } from '@angular/forms';

export function invalidEmailValidator(): ValidatorFn {
  return (control: AbstractControl): any => {
    const value: string = control.value;
    const isValid = value?.includes('@') && value?.includes('.');
    return !isValid ? { invalidEmail: { value: control.value } } : null;
  };
}
