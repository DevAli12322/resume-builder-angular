import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiDataService } from '../api-data.service';
import { InfoService } from '../info.service';
import { CommentService } from '../list-info.service';

@Component({
  selector: 'app-resume-listing',
  templateUrl: './resume-listing.component.html',
  styleUrls: ['./resume-listing.component.scss']
})
export class ResumeListingComponent {
  searchText: any;
  router: any;

  constructor(private dataobj: ApiDataService, private info: InfoService, private commentService: CommentService) { }
  data: any;
  updateUserInfo: any; 
  mycomments: any;
  sendData!:Comment;
  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.mycomments = comments;
      console.log(this.mycomments);
    });


    this.dataobj.getData().subscribe(response => {
      this.data = response.results;
      console.log(this.data);
    });
    this.info.getNewUserInfo().subscribe(info => {
      console.log(info);
      this.updateUserInfo = info;
    })
  }

  onDelete(index: number): void {
    this.mycomments.splice(index, 1);
    this.commentService.deleteEmployee(index);
    this.commentService.deletesocialMedia(index);
  }
  onEdit(sendData:any): void {
    // this.router.navigate(['/edit']);
    // this.commentService.editEmployee(index);
    console.log("comments");
    console.log(sendData);
    this.commentService.setNewUserInfo(sendData);
    // console.log(this.commentService.getEmployee(index, mycomment));
  }
  


}
