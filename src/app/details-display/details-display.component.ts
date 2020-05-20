import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../tv-show.service';
import { IarrayTvShowsDisplay } from '../itv-shows-display';

@Component({
  selector: 'app-details-display',
  templateUrl: './details-display.component.html',
  styleUrls: ['./details-display.component.css']
})
export class DetailsDisplayComponent {
  title = 'tv-show-app';
  tvshowsdisplay: IarrayTvShowsDisplay;
  errorMessage: string;

  constructor(private tvshowservice: TvShowService) {}
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
