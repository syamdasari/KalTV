import { Component } from '@angular/core';
import { TvShowService } from './tv-show.service';
import { IarrayTvShowsDisplay, ITvShowsDisplay } from './itv-shows-display';
import { ITvShowService } from './itv-show-service';
import { subscribeOn } from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { TvShowsDisplayComponent } from './tv-shows-display/tv-shows-display.component';
import { DetailsDisplayComponent } from './details-display/details-display.component';



  @Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvshow-app';
  tvshowsdisplay: IarrayTvShowsDisplay;

  errorMessage:string;

  constructor(public dialog: MatDialog){}
  openDialog()
  {

    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(DetailsDisplayComponent, dialogConfig);
  }
}






