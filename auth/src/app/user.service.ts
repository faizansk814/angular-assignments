import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl='http://localhost:3000/data'
  constructor(private http:HttpClient) { }

  signup(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl,user)
  }
  login(email:string,password:string):Observable<User[]>{
    const url=`${this.apiUrl}?email=${email}&password=${password}`
    return this.http.get<User[]>(url)
  }
}
