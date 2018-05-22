import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appCoincidencePassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CoincidencePasswordDirective,
    multi: true
  }]
})

export class CoincidencePasswordDirective implements Validator {

  @Input() appCoincidencePassword: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (this.appCoincidencePassword !== control.value) {
      return { 'notEqual': true };
    }
    return null;
  }
}
