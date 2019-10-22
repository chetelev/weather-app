import {Component, OnInit} from '@angular/core';
import {CITIES} from '../mock-cities';
import {DataService} from '../data.service';
import {forkJoin, zip} from 'rxjs';
import {delay} from 'rxjs/operators';

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
    this.getImages();
  }

  getWeather() {
    const london = this.dataService.getCity('london');
    const moscow = this.dataService.getCity('moscow');
    const paris = this.dataService.getCity('paris');
    const madrid = this.dataService.getCity('madrid');

    const cityGroup = forkJoin(
      london.pipe(),
      moscow.pipe(),
      paris.pipe(),
      madrid.pipe()
    );

    cityGroup.subscribe((val) => {
      this.cities[0].temperature = val[0].list[0].main.temp;
      this.cities[0].weather = val[0].list[0].weather[0].main;
      this.cities[1].temperature = val[1].list[0].main.temp;
      this.cities[1].weather = val[1].list[0].weather[0].main;
      this.cities[2].temperature = val[2].list[0].main.temp;
      this.cities[2].weather = val[2].list[0].weather[0].main;
      this.cities[3].temperature = val[3].list[0].main.temp;
      this.cities[3].weather = val[3].list[0].weather[0].main;
    });
  }


  getImages(): void {
    const sourceOne = this.dataService.getImage('london');
    const sourceTwo = this.dataService.getImage('moscow');
    const sourceThree = this.dataService.getImage('paris');
    const sourceFour = this.dataService.getImage('madrid');

    const getImgs = zip(
      sourceOne,
      sourceTwo.pipe(delay(50)),
      sourceThree.pipe(delay(100)),
      sourceFour.pipe(delay(150)),
    );

    getImgs.subscribe((val) => {
        this.cities[0].url = val[0].hits[0].webformatURL;
        this.cities[1].url = val[1].hits[0].webformatURL;
        this.cities[2].url = val[2].hits[0].webformatURL;
        this.cities[3].url = val[3].hits[0].webformatURL;
      }
    );
  }
}

