import { Component, OnInit } from '@angular/core'
import { CommentService } from '../list-info.service'

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent implements OnInit {
  comments: any;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }
}
