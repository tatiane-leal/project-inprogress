import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from '../avatar/avatar.module';

import { ProfileComponent } from './profile.component';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, AvatarModule, WeatherModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
