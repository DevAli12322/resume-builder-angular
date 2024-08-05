import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
    private newUser = new BehaviorSubject<any>({
      about: '',
      experience: [],
      education: [],
      hobby: []
    });
    private experience = new BehaviorSubject<any[]>([]);
    private education = new BehaviorSubject<any[]>([]);
    private hobby = new BehaviorSubject<any[]>([]);
    setNewUserInfo(user: any) {
      this.newUser.next(user);
    }
    setExperience(experience: any[]) {
      this.experience.next(experience);
    }
    setEducation(education: any[]) {
      this.education.next(education);
    }
    setHobby(hobby: any[]) {
      this.hobby.next(hobby);
    }
    getNewUserInfo() {
      return this.newUser.asObservable();
    }
    getExperience() {
      return this.experience.asObservable();
    }
    getEducation() {
      return this.education.asObservable();
    }
    getHobby() {
      return this.hobby.asObservable();
    }
  
  
}
