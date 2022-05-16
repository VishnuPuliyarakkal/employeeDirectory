import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string,
  username: string,
  password: string
}
interface loginParms {
  username: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AppService {
  totalCount = new Subject<Number>();
  user: User = { id: '6B80jKESOK', username: 'fingent', password: 'fingent' }

  constructor(private http: HttpClient,) { }

  login(loginParms: loginParms): Boolean {
    if (loginParms.username === this.user.username && loginParms.password === this.user.password) {
      localStorage.setItem('userId', this.user.id)
      return true
    } else return false
  }
  getAuthStatus() {
    const user = localStorage.getItem('userId')
    console.log(user)
    if (user && user == this.user.id) {
      return true
    } else {
      return false
    }
  }

  public getEmployees() {
    let API_URL = `https://jsonplaceholder.typicode.com/users`;
    return this.http.get<any[]>(API_URL)
  }
  public getEmployeeTasks(userId: number) {
    let API_URL = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
    return this.http.get<any[]>(API_URL)
  }
}
