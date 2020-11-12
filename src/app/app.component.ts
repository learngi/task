import { Component, OnInit } from '@angular/core';
import { CommonService } from './CommonService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ui';

  constructor(public commonService: CommonService) {}
  location = '';
  time = '';
  weatherList: any = [];
  showList = false;
  locationList: string[] = [
    'Hyderabad',
    'Visakhapatnam',
    'Chennai',
    'Bangalore',
    'Pune',
    'Delhi',
  ];

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // this.getWeatherDataByLocation();
  }

  // getWeatherDataByLocation(): void {
  //   this.commonService.getWeatherData().subscribe((data) => {
  //     // tslint:disable-next-line:no-string-literal
  //     this.weatherList = data;
  //     console.log('data', this.weatherList);
  //   });
  // }
  getWetherData(): void {
    this.showList = true;
    console.log('input', this.location, this.time);
    this.commonService.getWeatherData(this.location).subscribe((data) => {
      // tslint:disable-next-line:no-string-literal
      this.weatherList = data;
      console.log('data', this.weatherList);
    });
  }
}
