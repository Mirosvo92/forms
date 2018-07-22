import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServece} from '../shared/user-servece';
import {ControlContainer, NgForm} from '@angular/forms';
import {OnlyEnglishDirective} from '../shared/onlyEnglish.directive';
import {User} from '../shared/User.model';

@Component({
  selector: 'app-code-driven',
  templateUrl: './code-driven.component.html',
  styleUrls: ['./code-driven.component.scss'],
  // viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
})
export class CodeDrivenComponent implements OnInit {

  isEnglish = true;
  @ViewChild('form') form: NgForm;
  @ViewChild(OnlyEnglishDirective) test: OnlyEnglishDirective;
  @ViewChild('addressFieldsForm') public form: NgForm;
  dataForm = {
    name: 'Vladwer',
    password: 'Miros',
    nameInput: 'myinput'
  };

  inputTitle = 'User name';

  constructor(private userServece: UserServece) { }

  ngOnInit() {

    // this.form.setValue({
    //   password: 'sdf'
    // });

  }
  asdasdsad() {
    console.log(this.form.value.myinput[0][0]);
  }

  addUser() {
    console.log(this.form);
  }

  checkLeng() {
    this.isEnglish = this.test.isEnglish;
  }

}
