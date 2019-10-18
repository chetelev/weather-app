import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherComponent} from './weather/weather.component';
import {DetailsviewComponent} from './detailsview/detailsview.component';

const routes: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'details/:city', component: DetailsviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
