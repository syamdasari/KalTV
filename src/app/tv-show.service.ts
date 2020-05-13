import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IarrayTvShowsDisplay } from './itv-shows-display';
import { IarrayTvShowsDisplayData } from './itv-shows-display-data';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }


  //function to get show details from external api link
  getShowDetails(name:string): Observable<IarrayTvShowsDisplay>{
    console.log("in get show details function");
    return this.httpClient.get<IarrayTvShowsDisplayData>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}&appId=${environment.appId}`).pipe(
        map(data => this.transformToIarrayTvShowsDisplay(data)));

  }


  //Transform to ITvShowsDisplay function below
  private transformToIarrayTvShowsDisplay(data: IarrayTvShowsDisplayData): IarrayTvShowsDisplay{
    var len = data.length;
    console.log("Number of shows with the given text in the name:"+len);



    var  tvShowDisplayArray: IarrayTvShowsDisplay =[
       {
      id: data[0].show.id,
      url: `${environment.baseUrl}tvmaze.com/shows/${data[0].show.id}/${data[0].show.name}`,
      name: data[0].show.name,
      language: data[0].show.language,
      scheduleTime: data[0].show.schedule.time,
      scheduleDays: data[0].show.schedule.days,
      rating: data[0].show.rating.average,
      image: data[0].show.image.medium,
      summary: data[0].show.summary,
      networkname: data[0].show.summary

    }

     ]
     return tvShowDisplayArray;
  }
}
