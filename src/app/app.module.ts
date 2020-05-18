import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowsDisplayComponent } from './tv-shows-display/tv-shows-display.component';
import { TvShowService } from './tv-show.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SampleShowsComponent } from './sample-shows/sample-shows.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ShowSampleImagesService } from './show-sample-images.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    TvShowsDisplayComponent,
    ContactPageComponent,
    SampleShowsComponent,
    SearchByNameComponent,
    ScheduleComponent,
    SignUpPageComponent,
    SampleShowsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [TvShowService, ShowSampleImagesService],
  bootstrap: [AppComponent]

})
export class AppModule { }
