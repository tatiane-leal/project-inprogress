import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentModule } from '../comment/comment.module';
import { AvatarModule } from '../avatar/avatar.module';

import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, CommentModule, AvatarModule],
  exports: [PostComponent],
})
export class PostModule {}
