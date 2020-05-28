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
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BillingComponentComponent } from './billing-component/billing-component.component';
import { AuthorsComponent} from './authors/authors.component';
import {HomepageComponent} from './homepage/homepage.component'
import { CommonModule } from '@angular/common';
import { DisplayshowsComponent } from './displayshows/displayshows.component';
import {ShowServiceService} from './show-service.service';



import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatStepperModule} from '@angular/material/stepper';
import { LayoutModule } from '@angular/cdk/layout';
import { ShowActorsComponent } from './show-actors/show-actors.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
//import { JwPaginationComponent } from 'jw-angular-pagination';
//import { NgxPaginationModule } from 'ngx-pagination';

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
    BillingComponentComponent,
    AuthorsComponent,
    HomepageComponent,
    DisplayshowsComponent,
    SubscribeComponent
    //JwPaginationComponent
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
    MatSidenavModule,
    MatDatepickerModule,
    CommonModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatSelectModule,
    MatRadioModule,
    //NgxPaginationModule,
   // JwPaginationComponent
],
exports:[
  MatDialogModule,
  MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    MatStepperModule,
    LayoutModule,
    //JwPaginationComponent
],


  providers: [TvShowService, ScheduleService, ShowSampleImagesService, ShowServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
