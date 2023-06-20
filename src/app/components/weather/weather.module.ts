import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { CelsiusPipe } from 'src/app/pipes/celsius.pipe';

import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [WeatherComponent, CelsiusPipe],
  imports: [CommonModule],
  exports: [WeatherComponent],
})
export class WeatherModule {}
