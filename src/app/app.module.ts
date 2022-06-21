import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MeteoFormComponent} from './meteo-form/meteo-form.component';
import {HttpClientModule} from '@angular/common/http';
import {MeteoService} from './meteo.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MeteoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MeteoService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
