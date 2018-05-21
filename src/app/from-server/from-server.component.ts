import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../shared/User.model';
import {UserServece} from '../shared/user-servece';

@Component({
  selector: 'app-from-server',
  templateUrl: './from-server.component.html',
  styleUrls: ['./from-server.component.scss']
})
export class FromServerComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  errors = {};
  constructor(private userServece: UserServece) { }

  ngOnInit() {}

  addUser() {
    const {login, password, password_confirmation} = this.form.value;
    const user = new User(login, password, password_confirmation);
    this.userServece.setUser(user).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        // Error callback
        // const error = error.json();
        // const messages = error.messages;
        console.log(error.error.error);
        this.errors = error.error.error;
        console.log(this.errors);
        // messages.forEach((message) => {
        //   this.companyForm.controls[message.property].setErrors({
        //     remote: message.message });
        // });
      });
  }

  toArray(object) {
    return Object.keys(object).filter(el => object.hasOwnProperty(el));
  }

}
