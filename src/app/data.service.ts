import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = '6a1a141d0efdc0d8f847b44474aeadaa';
  imgKey = '13934870-f25c118134086af24ce9f8ae5';

  constructor(private http: HttpClient) {
  }


  getGeoCity(lat: string, lon: string): Observable<any> {
    const apiCall = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${this.apiKey}`;
    return this.http.get(apiCall);
  }

  getCity(city): Observable<any> {
    const apiCall = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get(apiCall);
  }

  getImage(city): Observable<any> {
    const imgCall = `https://pixabay.com/api?key=${this.imgKey}&q=${city}`;
    return this.http.get(imgCall);
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
