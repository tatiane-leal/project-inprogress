import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module
import { Observable, map } from 'rxjs';
import { WeatherApiResponse, WeatherInfo } from '../models/weather.interface';

@Injectable()
export class WeatherService {
  constructor(private _http: HttpClient) {}

  fetchWeatherApi(): Observable<WeatherInfo> {
    let url = 'https://api.openweathermap.org/data/2.5/weather';
    let params = {
      lat: 43.653225,
      lon: -79.383186,
      appid: 'c0d381f02506fdf9e323bb79ad0c27b3',
      units: 'imperial',
    };

    return this._http.get<WeatherApiResponse>(url, { params }).pipe(
      map((data) => {
        let weather = {
          weather: data.weather,
          main: data.main,
          name: data.name,
          sys: data.sys,
        };

        return weather;
      })
    );
  }
}
