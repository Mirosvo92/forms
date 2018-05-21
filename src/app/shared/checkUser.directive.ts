import {AbstractControl, FormControl, NG_ASYNC_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { debounceTime } from 'rxjs/operators';
import {distinctUntilChanged, map} from 'rxjs/internal/operators';

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
    console.log(control);
    // control.valueChanges
    //   .debounceTime(400) // Property 'debounceTime' does not exist on type 'Observable<any>'.
    //   .distinctUntilChanged()
    //   .subscribe();

    const debounce = control.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged()
    );
    // return debounce.subscribe(changes => { // Expected validator to return Promise or Observable.
    //   return this.checkUser(control.value).pipe(map(available =>
    //     available ? null : {alreadyUsed: true})
    //   );
    // });

    return this.checkUser(control.value);

  }

  checkUser(user: string) {
    return new Observable(observer => {
      this.httpClient.get(`http://winter-pine-4182.getsandbox.com/login?login=${user}`)
        .subscribe(data => {
          observer.next(null);
        }, (error => {
          observer.next({userError: true});
        }));
    });
  }
}
