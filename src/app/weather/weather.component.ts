import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {CITIES} from '../mock-cities';
import {zip} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  cities = CITIES;
  geoCityData: any;
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
          });
      });
  }
}
