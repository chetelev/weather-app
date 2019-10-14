import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {City} from '../cities';
import {CITIES} from '../mock-cities';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  cities = CITIES;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getImage('london').subscribe(val => this.cities[0].url = val.hits[15].webformatURL);
    this.dataService.getImage('berlin').subscribe(val => this.cities[1].url = val.hits[1].webformatURL);
    this.dataService.getImage('paris').subscribe(val => this.cities[2].url = val.hits[5].webformatURL);
    this.dataService.getImage('madrid').subscribe(val => this.cities[3].url = val.hits[5].webformatURL);
  }
}
