import {AbstractControl, FormControl, NG_ASYNC_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of, timer} from 'rxjs/index';
import {catchError, map, switchMap} from 'rxjs/internal/operators';

@Directive({
  selector: '[appCheckUser]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CheckUserDirective,
    multi: true
  }]
})

export class CheckUserDirective implements Validator {

  @Input() appCheckUser: FormControl;

  constructor(private httpClient: HttpClient) {
  }

  validate(control: AbstractControl) {
    return timer(1500).pipe(
      switchMap(() => {
        const params = new HttpParams().set('login', control.value);
        return this.httpClient.get('http://winter-pine-4182.getsandbox.com/login', {params})
          .pipe(map(event => {
            console.log('event', event);
            if (event['status'] === 'ok') {
              return null;
            } else {
              return {'loginError': true};
            }
          }), catchError(err => of({'loginError': true})));
      })
    );

  }

}
