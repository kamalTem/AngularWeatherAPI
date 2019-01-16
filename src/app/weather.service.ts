import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class WeatherService {

  apiKey= '342f78702a9ac0ae254ed1b73c788980';

  url;
  constructor(public http: HttpClient) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  }


  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey);

  }


}