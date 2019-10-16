import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {GeoCityComponent} from './geo-city/geo-city.component';

const routes: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'geoCity', component: GeoCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
