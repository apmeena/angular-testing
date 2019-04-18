import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public url: string = 'https://jsonplaceholder.typicode.com/users/';

  public getUsers() {
    return this.http.get(this.url);
  }

  public getUserById(userId) {
    return this.http.get(this.url + userId);
  }
}
