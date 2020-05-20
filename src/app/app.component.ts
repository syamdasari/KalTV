import { Component } from '@angular/core';
import { TvShowService } from './tv-show.service';
import { IarrayTvShowsDisplay, ITvShowsDisplay } from './itv-shows-display';
import { ITvShowService } from './itv-show-service';
import { subscribeOn } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



  @Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvshow-app';
  tvshowsdisplay: IarrayTvShowsDisplay;

  errorMessage:string;



  constructor(private tvshowservice: TvShowService){}
    doSearch(searchValue){
      console.log("searchvalue entered"+searchValue);
      if(searchValue != 'invalid')
      {

      const userInput= searchValue.trim();
      this.tvshowservice.getShowDetails(userInput).subscribe(data =>
        {
          if(data)
          {
            this.tvshowsdisplay = data;
            this.errorMessage = null;
          }
          else{
            this.errorMessage = "SORRY!! There is no such Show exist with the name you have entered";
            console.log(this.errorMessage);
          }
        });
      }
      else{
        // display should be nullified
        this.tvshowsdisplay = null;
      }
    }
  }
