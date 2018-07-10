import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServece} from '../shared/user-servece';
import {NgForm} from '@angular/forms';
import {OnlyEnglishDirective} from '../shared/onlyEnglish.directive';
import {User} from '../shared/User.model';

@Component({
  selector: 'app-code-driven',
  templateUrl: './code-driven.component.html',
  styleUrls: ['./code-driven.component.scss']
})
export class CodeDrivenComponent implements OnInit {

  isEnglish = true;
  @ViewChild('form') form: NgForm;
  @ViewChild(OnlyEnglishDirective) test: OnlyEnglishDirective;
  dataForm = {
    name: 'Vladwer',
    password: 'Miros'
  };

  inputTitle = 'User name';

  constructor(private userServece: UserServece) { }

  ngOnInit() {

  }

  addUser() {
    console.log(this.form);
  }

  checkLeng() {
    this.isEnglish = this.test.isEnglish;
  }

}
