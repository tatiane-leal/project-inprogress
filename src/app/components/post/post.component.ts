import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() employeeId!: number;

  postForm!: FormGroup;
  newMessage!: string;

  constructor(
    private _fb: FormBuilder,
    private _commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.postForm = this._fb.group({
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.newMessage = this.postForm.value.message;
    this._commentService.commentSubject$.next(this.newMessage);

    this.postForm.reset();
  }
}
