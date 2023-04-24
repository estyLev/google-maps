import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from '../classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList: Array<User> = [];
  token: string | null = "";
  headers: HttpHeaders | undefined;

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<Array<User>> {
    this.token = sessionStorage.getItem("token");
    if (!this.token)
      alert("New user? please subscribe");

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get<Array<User>>(environment.URL + "users/", { 'headers': this.headers });
  }

  login(password: string, name: string): Observable<any> {
    return this.http.post<any>(`${environment.URL}login`, { password, name }).pipe(
      tap((data) => {
        sessionStorage.setItem('token', JSON.stringify(data.accessToken));
        console.log(data);
      })
    )
  }
  addUser(user:User): Observable<Array<User>> {
    
    return this.http.post<Array<User>>(environment.URL + "users/", user);
  }

  
}
