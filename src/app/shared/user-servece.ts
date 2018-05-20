import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './User.model';

@Injectable()
export class UserServece {

  constructor(private httpClient: HttpClient) {}

  setUser(data: User) {
    const apiUrl = 'http://winter-pine-4182.getsandbox.com/users';
    return this.httpClient.post(apiUrl, data);
  }

}
