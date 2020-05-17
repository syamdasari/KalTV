import { Component } from '@angular/core';
import { TvShowService } from './tv-show.service';
import { IarrayTvShowsDisplay, ITvShowsDisplay } from './itv-shows-display';
import { ITvShowService } from './itv-show-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvshow-app';
  tvshowsdisplay: IarrayTvShowsDisplay;
  constructor(private tvshowservice: TvShowService){}
    doSearch(searchValue){
      console.log("searchvalue entered"+searchValue);
      const userInput= searchValue.trim();
      this.tvshowservice.getShowDetails(userInput).subscribe(data => this.tvshowsdisplay = data)
    }
  }
