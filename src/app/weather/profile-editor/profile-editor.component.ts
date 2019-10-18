import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

const CITY_URL = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {
  }

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(CITY_URL, {params: PARAMS.set('namePrefix', term)}).pipe(
        map((response: any) => response.data.map(e => e.city))
      );
  }
}

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    searchCity: new FormControl('')
  });

  model: any;
  searching = false;
  searchFailed = false;
  city: string;

  constructor(
    private route: Router,
    // tslint:disable-next-line:variable-name
    private _service: CityService) {
  }

  ngOnInit() {
  }

  searchCity() {
    this.city = this.profileForm.value.searchCity;
    this.route.navigate([`details/${this.city}`]);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );
}
