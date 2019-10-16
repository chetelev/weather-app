import {Component, OnInit} from '@angular/core';
import {CITIES} from '../mock-cities';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  cities = CITIES;

  constructor() {
  }

  ngOnInit() {
  }

}
