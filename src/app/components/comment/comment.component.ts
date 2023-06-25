import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment.interface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() employeeId!: number;
  comments: any;

  constructor(public _commentService: CommentService) {}

  ngOnInit(): void {
    this._commentService
      .getCommentByBirthdayPersonId(this.employeeId)
      .subscribe((data) => {
        this.comments = data;
      });

    this._commentService.commentSubject$
      .pipe(
        map((newMessage) => {
          return newMessage;
        }),
        filter((newMessage) => !!newMessage)
      )
      .subscribe((newMessage) => {
        console.log('did a new msg got emmitted?', newMessage);
        this._commentService
          .createComment(newMessage, this.employeeId)
          .subscribe((createdComment) => {
            console.log('createdComment is:::::', createdComment);
            this.comments = [...this.comments, createdComment];
          });
      });
  }
}
