import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})

export class OnlyEnglishDirective {

  @Input() appOnlyNumber: string;
  isEnglish: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const regex = new RegExp('^[0-9a-zA-Z]+$');
    console.log(event);
    if (event.key.match(regex)) {
      this.isEnglish = true;
      return true;
    }
    this.isEnglish = false;
    return false;
  }

}
