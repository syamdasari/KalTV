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
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsDisplayComponent } from './details-display/details-display.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BillingComponentComponent } from './billing-component/billing-component.component';



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
    DetailsDisplayComponent,
    BillingComponentComponent

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
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatDividerModule,
    MatSliderModule,
    MatSidenavModule
],
exports:[
  MatDialogModule
],


  providers: [TvShowService, ScheduleService, ShowSampleImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
