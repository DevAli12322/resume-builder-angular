import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) { }
  getData(): Observable<any> {
      return this.http.get('https://randomuser.me/api/?results=50');
  }
  private newUser = new BehaviorSubject<any>({
    email:'',
    phoneNo:'',
  });
  private name = new BehaviorSubject<any[]>([]);
  private location = new BehaviorSubject<any[]>([]);
  private Username = new BehaviorSubject<any[]>([]);

  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }
  setname(name: any[]) {
    this.name.next(name);
  }
  setlocation(location: any[]) {
    this.location.next(location);
  }
  setlogin(login: any[]) {
    this.Username.next(login);
  }
  getNewUserInfo() {
    return this.newUser.asObservable();
  }
  getname() {
    return this.name.asObservable();
  }
  getlocation() {
    return this.location.asObservable();
  }
  getlogin() {
    return this.Username.asObservable();
  }

}
