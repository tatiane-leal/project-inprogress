import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { PostModule } from '../post/post.module';
import { AvatarModule } from '../avatar/avatar.module';
import { WeatherModule } from '../weather/weather.module';

import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    PostModule,
    AvatarModule,
    WeatherModule,
    AvatarModule,
    MatButtonModule,
  ],
  exports: [UserComponent],
})
export class UserModule {}
