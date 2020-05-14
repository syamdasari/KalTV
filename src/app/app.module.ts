import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowsDisplayComponent } from './tv-shows-display/tv-shows-display.component';
import { TvShowService } from './tv-show.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SampleShowsComponent } from './sample-shows/sample-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsDisplayComponent,
    ContactPageComponent,
    SampleShowsComponent
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
