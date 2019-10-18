import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileEditorComponent, CityService} from './weather/profile-editor/profile-editor.component';
import {SharedComponent} from './shared/shared.component';
import {DetailsviewComponent} from './detailsview/detailsview.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ProfileEditorComponent,
    SharedComponent,
    DetailsviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
