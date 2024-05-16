import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { weather } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http =inject(HttpClient);


  apiUrl="http://api.weatherapi.com/v1/current.json?key=c821253bb7bd42edb6a95615241605&q="
  getWeatherData(search:string):Observable<weather>{
   return this.http.get<weather>(this.apiUrl + search)
  }
}
