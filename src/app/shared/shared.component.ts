import {Component, OnInit} from '@angular/core';
import {CITIES} from '../mock-cities';
import {DataService} from '../data.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  cities = CITIES;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.dataService.getCity('london').subscribe((val) => {
      this.cities[0].temperature = val.list[0].main.temp;
      this.cities[0].weather = val.list[0].weather[0].main;
    });
    this.dataService.getCity('moscow').subscribe((val) => {
      this.cities[1].temperature = val.list[0].main.temp;
      this.cities[1].weather = val.list[0].weather[0].main;
    });
    this.dataService.getCity('paris').subscribe((val) => {
      this.cities[2].temperature = val.list[0].main.temp;
      this.cities[2].weather = val.list[0].weather[0].main;
    });
    this.dataService.getCity('madrid').subscribe((val) => {
      this.cities[3].temperature = val.list[0].main.temp;
      this.cities[3].weather = val.list[0].weather[0].main;
    });
  }
}
