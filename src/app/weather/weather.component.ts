import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {CITIES} from '../mock-cities';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  cities = CITIES;
  lng: string;
  lat: string;
  city: string;
  geoCityData: any;
  geoCityImgUrl: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.adaptPosition();
    this.getImages();
    this.getCity();
  }

  adaptPosition() {
    this.getPosition().then(pos => {
      this.lng = pos.lng;
      this.lat = pos.lat;
      this.getGeoWeather();
    });
  }

  getImages(): void {
    this.dataService.getImage('london').subscribe(val => this.cities[0].url = val.hits[16].webformatURL);
    this.dataService.getImage('berlin').subscribe(val => this.cities[1].url = val.hits[1].webformatURL);
    this.dataService.getImage('paris').subscribe(val => this.cities[2].url = val.hits[5].webformatURL);
    this.dataService.getImage('madrid').subscribe(val => this.cities[3].url = val.hits[5].webformatURL);
    this.dataService.getImage('bitola').subscribe(val => this.geoCityImgUrl = val.hits[2].webformatURL);
  }

  getCity(): void {
  }

  getGeoWeather(): void {
    this.dataService.getGeoCity(this.lat, this.lng)
      .subscribe((val) => {
        this.geoCityData = val;
        this.city = val.name;
      });
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }
}
