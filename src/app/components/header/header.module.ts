import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, WeatherModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
