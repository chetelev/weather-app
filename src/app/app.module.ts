import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileEditorComponent} from './weather/profile-editor/profile-editor.component';
import { SharedComponent } from './shared/shared.component';
import { DetailsviewComponent } from './detailsview/detailsview.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
