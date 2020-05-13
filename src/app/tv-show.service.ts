import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IarrayTvShowsDisplay, ITvShowsDisplay } from './itv-shows-display';
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



    var  tvShowDisplayArray: IarrayTvShowsDisplay = new Array();
    for (var i=0;i<len;i++)
       {
         tvShowDisplayArray.push({
           id: data[i].show.id,
           url: `${environment.baseUrl}tvmaze.com/shows/${data[i].show.id}/${data[i].show.name}`,
           name: data[i].show.name,
        language: data[i].show.language,
        scheduleTime: data[i].show.schedule.time,
        scheduleDays: data[i].show.schedule != null && data[i].show.schedule.days.length != 0 ? data[i].show.schedule.days : ["Not Found"],
        rating: data[i].show.rating != null && data[i].show.rating.average != null? data[i].show.rating.average : "Not Rated",
        image: data[i].show.image != null ? data[i].show.image.medium : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png",
        summary: data[i].show.summary,
        networkname: data[i].show.network != null ? data[i].show.network.name : "Not Found"
         } as ITvShowsDisplay);
         console.log(data[i].show.rating + ":");



         }
         return tvShowDisplayArray;
        }}
