import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from '../avatar/avatar.module';

import { CommentComponent } from './comment.component';

@NgModule({
  declarations: [CommentComponent],
  imports: [CommonModule, AvatarModule],
  exports: [CommentComponent],
})
export class CommentModule {}
