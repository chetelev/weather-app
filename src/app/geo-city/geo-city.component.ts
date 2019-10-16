import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-geo-city',
  templateUrl: './geo-city.component.html',
  styleUrls: ['./geo-city.component.css']
})
export class GeoCityComponent implements OnInit {
  geoCityData: any;
  geoCityImgUrl: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.adaptPosition();
    this.background();
  }

  adaptPosition() {
    this.dataService.getPosition()
      .then(pos => {
        this.dataService.getGeoCity(pos.lat, pos.lng)
          .subscribe((val) => {
            this.geoCityData = val;
          });
      });
    setTimeout((x) => {
      this.dataService.getImage(this.geoCityData.name).subscribe(val => this.geoCityImgUrl = val.hits[2].webformatURL);
    }, 150);
  }

  background() {
    setTimeout((x) => {
      document.querySelector('body').style.backgroundImage = `url("${this.geoCityImgUrl}")`;
    }, 1500);


  }

}
