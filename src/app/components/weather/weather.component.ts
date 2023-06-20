import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherInfo } from '../../models/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather!: WeatherInfo;
  weatherIcon!: string;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService.fetchWeatherApi().subscribe((data) => {
      this.weather = data;
      this.weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    });
  }
}
