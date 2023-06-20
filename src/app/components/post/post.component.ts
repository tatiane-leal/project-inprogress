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
  message!: string;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this._fb.group({
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    const message = this.postForm.value.message;
  }
}
