import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.css']
})
export class DetailsviewComponent implements OnInit {
  data: any;
  imageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    this.getCity();
  }

  getCity(): void {
    const city = this.route.snapshot.paramMap.get('city');
    if (city) {
      this.dataService.getCity(city)
        .subscribe((value) => {
          this.data = value;
          this.dataService.getImage(value.city.name).subscribe(val => this.imageUrl = val.hits[0].webformatURL);
        });
    }
  }
}
