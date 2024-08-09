import { Component } from '@angular/core';
import { CommentService } from '../list-info.service';

@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.scss']
})
export class EditFieldComponent {
  updateUserInfo!: any;
  constructor( private mycomment: CommentService) { }
  ngOnInit(): void {
    this.mycomment.getNewUserInfo().subscribe(info => {
      console.log("Final Val" + info.name);
      this.updateUserInfo = info;
    })
    // console.log(this.mycomment);
  }




}
