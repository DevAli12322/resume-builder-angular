import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { InfoService } from '../info.service';
import { Router } from '@angular/router';
import { CommentService, Employee, Social, SocialMedia } from '../list-info.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  resumeForm: FormGroup;


  Count: number = 5;
  constructor(private fb: FormBuilder, private info: InfoService, private router: Router, private commentService: CommentService) {
    this.resumeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      skills: this.fb.array([this.createSkill()], Validators.required),
      socialMedia: this.fb.array([this.createSocialMedia()], Validators.required)
    });
  }

  createSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
      progress: [0, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  get skills(): FormArray {
    return this.resumeForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.createSkill());
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  createSocialMedia(): FormGroup {
    return this.fb.group({
      platform: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  get socialMedia(): FormArray {
    return this.resumeForm.get('socialMedia') as FormArray;
  }
  get progress() {
    return this.resumeForm.get('progress');
  }
  addSocialMedia(): void {
    this.socialMedia.push(this.createSocialMedia());
  }

  removeSocialMedia(index: number): void {
    this.socialMedia.removeAt(index);
  }



  onSubmit(): void {
    if (this.resumeForm.valid) {
      console.log(this.resumeForm.value);
      const employee: Employee = {
        ID: this.Count,
        name: this.resumeForm.value.name,
        email: this.resumeForm.value.email,
        phoneNo: this.resumeForm.value.phoneNo,
        address: this.resumeForm.value.Address,
        about: this.socialMedia.value.username,
      };
      let myObj : Social = this.resumeForm.get('socialMedia.0')?.value;
      
      let socialmedia: SocialMedia = {
        SocialmediaId: this.Count,
        _Platform: myObj.platform,
        username: myObj.username
      }
      console.log(socialmedia);
      this.Count++;
      this.commentService.saveEmployee(employee).subscribe(data => {
        console.log(data);
        alert("Employee added successfully!");
      },

        err => console.log(err));

      this.commentService.saveSocialMedia(socialmedia).subscribe(data => {
        console.log(data);
        alert("SocialMedia added successfully!");
      },
        err => console.log(err));
      this.info.setNewUserInfo(this.resumeForm.value);
      this.info.setSkillArray(this.skills.value);



      this.info.setSocialMediaArray(this.socialMedia.value);
      this.router.navigate(['/home']);
    } else {
      console.log('Form is invalid');
    }
    this.resumeForm.reset();
  }
  onReset() {
    this.resumeForm.reset();
  }
}
