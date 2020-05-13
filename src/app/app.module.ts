import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowsDisplayComponent } from './tv-shows-display/tv-shows-display.component';
import { TvShowService } from './tv-show.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TvShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
