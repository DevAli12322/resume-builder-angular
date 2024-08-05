import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiDataService } from '../api-data.service';
import { InfoService } from '../info.service';
import { CommentService } from '../list-info.service'

@Component({
  selector: 'app-resume-listing',
  templateUrl: './resume-listing.component.html',
  styleUrls: ['./resume-listing.component.scss']
})
export class ResumeListingComponent {
  searchText: any;

  constructor(private dataobj: ApiDataService, private info: InfoService, private commentService: CommentService) { }
  data: any;
  updateUserInfo: any; 
  mycomments: any;
  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.mycomments = comments;
      console.log("comments");
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
    console.log(this.data);
  }
  
  


}
