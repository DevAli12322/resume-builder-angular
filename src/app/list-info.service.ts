import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Comment {
  ID: number
  name: string
  email: string
  address: string
  phoneNo: string
  username: string
}
export interface Skill {
  ID: number
  skill: string
  progress: string
}

export interface Employee {
  ID: number
  name: string
  email: string
  phoneNo: string
  address: string
  about: string
}
export interface SocialMedia {
  SocialmediaId: number
  _Platform: string
  username: string
}
export interface Social {
  platform: string
  username: string
}
@Injectable({
  providedIn: 'root',
})
export class CommentService {


  private newUser = new BehaviorSubject<any>({
    id:0,
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    username:''
  });
  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }
  getNewUserInfo() {
    return this.newUser.asObservable();
  }
  private baseUrl = 'http://localhost:6173/api/resume/getlist';
  private employeeUrl = 'http://localhost:6173/api/resume/postresume';
  socialMediaUrl = 'http://localhost:6173/api/socialmedia/postsocialmedia'
  readonly deleteEmployeeUrl = 'http://localhost:6173/api/resume/deleteresume';
  deleteSocialMediaUrl = 'http://localhost:6173/api/socialmedia/deletesocialmedia';
  myObj!:CommentService;
  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}`);
  }
  saveEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.employeeUrl}`, employee);
  }
  saveSocialMedia(socialMedia: SocialMedia): Observable<SocialMedia> {
    return this.http.post<SocialMedia>(`${this.socialMediaUrl}`, socialMedia);
  }
  deleteEmployee(id: number): Observable<number> {
    return this.http.delete<number>(this.deleteEmployeeUrl + '${id}');
  }
  deletesocialMedia(id: number): Observable<number> {
    return this.http.delete<number>(`${this.deleteSocialMediaUrl}/${id}`);
  }
  // getEmployee(mycomment:CommentService): Observable<CommentService> {
    
    
  // }
  
  
}
