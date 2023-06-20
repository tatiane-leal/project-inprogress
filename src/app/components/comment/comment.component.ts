import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Comment } from 'src/app/models/comment.interface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() employeeId!: number;

  comments: Comment[] = [];

  constructor(private _commentService: CommentService) {}

  ngOnInit(): void {
    this._commentService
      .getCommentByBirthdayPersonId(this.employeeId)
      .subscribe((data) => {
        this.comments = data;
      });
  }
}
