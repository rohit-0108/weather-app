import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { weather } from './models/weather.model';
import { Observable, of } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncPipe,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  weatherService = inject(WeatherService);
  title = 'weather-app';

  sample_city={
    location:{
      country:"India",
      name:"new delhi",
      region:"Delhi"
    },
    current:{
      temp_c:40,
      temp_f:104,
      is_day:1,
      condition:{
        text:"mist",
        icon:"//cdn.weatherapi.com/weather/64x64/day/143.png"

      },
      wind_kph:4.3,
      wind_mph:6.8,
      humidity:15

    }
  }as weather;

  weather$?:Observable<weather | undefined>= of(undefined);

  onSearch(search:string){
    this.weather$ =this.weatherService.getWeatherData(search);
  }
}
