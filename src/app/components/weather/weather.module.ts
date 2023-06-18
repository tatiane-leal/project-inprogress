import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from 'src/app/services/weather.service';

import { CelsiusPipe } from 'src/app/pipes/celsius.pipe';

import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [WeatherComponent, CelsiusPipe],
  imports: [CommonModule, HttpClientModule],
  providers: [WeatherService],
  exports: [WeatherComponent],
})
export class WeatherModule {}
