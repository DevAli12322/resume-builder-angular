import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() { }
  private newUser = new BehaviorSubject<any>({
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    progress:0
  });
  private skillArray = new BehaviorSubject<any[]>([]);
  private socialMediaArray = new BehaviorSubject<any[]>([]);
  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }
  setSkillArray(skillArray: any[]) {
    this.skillArray.next(skillArray);
  }
  setSocialMediaArray(socialMediaArray: any[]) {
    this.socialMediaArray.next(socialMediaArray);
  }
  getNewUserInfo() {
    return this.newUser.asObservable();
  }
  getSkillArray() {
    return this.skillArray.asObservable();
  }
  getSocialMediaArray() {
    return this.socialMediaArray.asObservable();
  }
}
