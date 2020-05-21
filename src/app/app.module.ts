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
import { ScheduleService } from './schedule.service';
import { ShowSampleImagesService } from './show-sample-images.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShowsCastComponent } from './shows-cast/shows-cast.component';
import { ShowCastService } from './show-cast.service';



@NgModule({
  declarations: [
    AppComponent,
    TvShowsDisplayComponent,
    ContactPageComponent,
    SampleShowsComponent,
    SearchByNameComponent,
    ScheduleComponent,
    SignUpPageComponent,
    SampleShowsComponent,
    SearchByNameComponent,
    RegisterPageComponent,
    ForgotPasswordComponent,
    ShowsCastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule
  ],

  providers: [TvShowService, ScheduleService, ShowSampleImagesService, ShowCastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
