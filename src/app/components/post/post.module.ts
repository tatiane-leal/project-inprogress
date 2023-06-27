import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { CommentModule } from '../comment/comment.module';
import { AvatarModule } from '../avatar/avatar.module';

import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    CommentModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [PostComponent],
})
export class PostModule {}
