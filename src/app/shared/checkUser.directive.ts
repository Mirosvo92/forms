import {AbstractControl, FormControl, NG_ASYNC_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of, timer} from 'rxjs/index';
import {catchError, map, switchMap} from 'rxjs/internal/operators';
// import {TimerObservable} from 'rxjs/observable/TimerObservable';

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

    // control.valueChanges
    //   .debounceTime(400) // Property 'debounceTime' does not exist on type 'Observable<any>'.
    //   .distinctUntilChanged()
    //   .subscribe();

    // const debounce = control.valueChanges.pipe(
    //   debounceTime(600),
    //   distinctUntilChanged()
    // );
    // return debounce.subscribe(changes => { // Expected validator to return Promise or Observable.
    //   return this.checkUser(control.value).pipe(map(available =>
    //     available ? null : {alreadyUsed: true})
    //   );
    // });

    // return this.checkUser(control.value);

    // return debounce.subscribe(changes => { // Expected validator to return Promise or Observable.
    //   return this.checkUser(control.value).pipe(map(available =>
    //     available ? null : {alreadyUsed: true})
    //   );

    return timer(500).pipe(
      switchMap(() => {
        const params = new HttpParams().set('login', control.value);
        return this.httpClient.get('http://winter-pine-4182.getsandbox.com/login', {params})
          .pipe(map(event => {
            if (event['status'] === 'ok') {
              return null;
            } else {
              return {'loginError': true};
            }
          }), catchError(err => of({'error': true})));
      })
    );

  }

  // loginAvailable(control: AbstractControl) {
  //   return timer(500).pipe(
  //     switchMap(() => {
  //       const params = new HttpParams().set('login', control.value);
  //       return this.httpClient.get('http://winter-pine-4182.getsandbox.com/login', {params})
  //         .pipe(map(event => {
  //           if (event['status'] === 'ok') {
  //             return null;
  //           } else {
  //             return {'loginError': true};
  //           }
  //         }), catchError(err => of({'error': true})));
  //     })
  //   );
  // }

  // checkUser(user: string) {
  //   return new Observable(observer => {
  //     this.httpClient.get(`http://winter-pine-4182.getsandbox.com/login?login=${user}`)
  //       .subscribe(data => {
  //         observer.next(null);
  //       }, (error => {
  //         observer.next({userError: true});
  //       }));
  //   });
  // }
}
