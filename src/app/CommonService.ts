import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {


  constructor(public http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getWeatherData(value) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${'8a05c5f91716f2d054ec4505fb51522a'}`;
    return this.http.get(url);
  }
  // tslint:disable-next-line:typedef
  token() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'BEARER ' + sessionStorage.getItem('token'),
      }),
    };
    return httpOptions;
  }
}
