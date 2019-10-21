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
  geoCityData: any;
  geoCityImgUrl: string;
  today: number = Date.now();

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.adaptPosition();
  }

  adaptPosition() {
    this.dataService.getPosition()
      .then(pos => {
        this.dataService.getGeoCity(pos.lat, pos.lng)
          .subscribe((val) => {
            this.geoCityData = val;
            console.log(this.geoCityData);
            this.getImages();
          });
      });
  }

  getImages(): void {
    this.dataService.getImage('london').subscribe(val => this.cities[0].url = val.hits[0].webformatURL);
    this.dataService.getImage('moscow').subscribe(val => this.cities[1].url = val.hits[0].webformatURL);
    this.dataService.getImage('paris').subscribe(val => this.cities[2].url = val.hits[0].webformatURL);
    this.dataService.getImage('madrid').subscribe(val => this.cities[3].url = val.hits[0].webformatURL);
    this.dataService.getImage(this.geoCityData.name).subscribe((val) => {
      this.geoCityImgUrl = val.hits[2].webformatURL;
    });
  }
}
