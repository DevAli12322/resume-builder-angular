import { Component } from '@angular/core';
import { InfoService } from '../info.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent {

  updateUserInfo: any;
  updateSkillArray!: any[];
  updateSocialMediaArray!: any[];
  updateHomepage: any;
  updateExperience!: any[];
  updateEducation!: any[];
  updateHobby!: any[];
  constructor(private info: InfoService, private info_home: HomeService, private skillArray: HomeService, private socialMediaArray: HomeService,) { }
  ngOnInit() {
    this.info.getNewUserInfo().subscribe(info => {
      console.log(info);
      this.updateUserInfo = info;
    })
    this.info.getSkillArray().subscribe(skillArray => {
      this.updateSkillArray = skillArray;
    })
    this.info.getSocialMediaArray().subscribe(socialMediaArray => {
      console.log(socialMediaArray);
      this.updateSocialMediaArray = socialMediaArray;
    })
    this.info_home.getNewUserInfo().subscribe(infoHome => {
      console.log(infoHome);
      this.updateHomepage = infoHome;
    })
    this.info_home.getExperience().subscribe(experience => {
      console.log(experience);
      this.updateExperience = experience;
    })
    this.info_home.getEducation().subscribe(education => {
      console.log(education);
      this.updateEducation = education;
    })
    this.info_home.getHobby().subscribe(hobby => {
      console.log(hobby);
      this.updateHobby = hobby;
    })
    console.log("Skill Array");
    console.log(this.updateSkillArray);
    console.log("Social Media Array");
    console.log(this.updateSocialMediaArray);
    console.log("Progress Values");
  }
}
