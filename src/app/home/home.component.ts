import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoService } from '../info.service';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  aboutForm!: FormGroup;
  constructor(private fb: FormBuilder , private  info:HomeService, private router:Router) {
    this.aboutForm = this.fb.group({
      about: ['', Validators.required],
      experience: this.fb.array([this.createExperience()], Validators.required),
      education: this.fb.array([this.createEducation()], Validators.required),
      hobby: this.fb.array([this.createHobby()], Validators.required)
    });
  }
  createExperience() {
    return this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      orgName: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }
  createEducation() {
    return this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      instName: ['', Validators.required],
      desc:['',Validators.required]      
    });
  }
  createHobby() {
    return this.fb.group({
      hobby: ['', Validators.required]
    });
  }
  get experience(): FormArray {
    return this.aboutForm.get('experience') as FormArray;
  }

  addExperience(): void {
    this.experience.push(this.createExperience());
  }

  removeExperience(index: number): void {
    this.experience.removeAt(index);
  }
  get education(): FormArray {
    return this.aboutForm.get('education') as FormArray;
  }
  addEducation(): void {
    this.education.push(this.createEducation());
  }
  removeEducation(index: number): void {
    this.education.removeAt(index);
  }
  get hobby(): FormArray {
    return this.aboutForm.get('hobby') as FormArray;
  }
  addHobby(): void {
    this.hobby.push(this.createHobby());
  }
  removeHobby(index: number): void {
    this.hobby.removeAt(index);
  }
  onSubmit() {

    if (this.aboutForm.valid) {
      this.info.setNewUserInfo(this.aboutForm.value);
      this.info.setExperience(this.experience.value);
      this.info.setEducation(this.education.value);
      this.info.setHobby(this.hobby.value);
      console.log(this.aboutForm.value);
      this.router.navigate(['/imageform']);
    }
    else {
      console.log('Form is not valid');
    }

  }

}
