import {Component, OnInit, ViewChild} from '@angular/core';
import {UserServece} from '../shared/user-servece';
import {NgForm} from '@angular/forms';
import {OnlyEnglishDirective} from '../shared/onlyEnglish.directive';

@Component({
  selector: 'app-code-driven',
  templateUrl: './code-driven.component.html',
  styleUrls: ['./code-driven.component.scss']
})
export class CodeDrivenComponent implements OnInit {

  isEnglish = true;
  @ViewChild('form') form: NgForm;
  @ViewChild(OnlyEnglishDirective) test: OnlyEnglishDirective;

  constructor(private userServece: UserServece) { }

  ngOnInit() {
  }

  addUser() {
    // const {login, password, password_confirmation} = {};
    // const user = new User(login, password, password_confirmation);
    // this.userServece.setUser(user).subscribe(data => console.log(data));
  }

  checkLeng() {
    this.isEnglish = this.test.isEnglish;
  }

}
