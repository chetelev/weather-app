import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {CITIES} from '../mock-cities';
import {isUpperCase} from 'tslint/lib/utils';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  cities = CITIES;
  // tslint:disable-next-line:max-line-length
  bgImg = 'https://images.unsplash.com/photo-1564639580159-74150c717f25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getImages();
    this.getWeather();
  }

  getImages(): void {
    this.dataService.getImage('london').subscribe(val => this.cities[0].url = val.hits[15].webformatURL);
    this.dataService.getImage('berlin').subscribe(val => this.cities[1].url = val.hits[1].webformatURL);
    this.dataService.getImage('paris').subscribe(val => this.cities[2].url = val.hits[5].webformatURL);
    this.dataService.getImage('madrid').subscribe(val => this.cities[3].url = val.hits[5].webformatURL);
  }

  getWeather(): void {
    let test1: Observable<any>;
    const test = this.dataService.getCity('london');
    test.pipe(source => test1 = source);
    console.log(test1);
  }


}
