import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromMovies from './movies';
import { ArrayPipe } from './array.pipe';
import { RefreshComponent } from './movies/refresh/refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromMovies.components,
    ArrayPipe,
    RefreshComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
