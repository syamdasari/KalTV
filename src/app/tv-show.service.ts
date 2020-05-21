import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IarrayTvShowsDisplay, ITvShowsDisplay } from './itv-shows-display';
import { IarrayTvShowsDisplayData } from './itv-shows-display-data';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ITvShowService } from './itv-show-service';

@Injectable({
  providedIn: 'root'
})
export class TvShowService implements ITvShowService {

  constructor(private httpClient: HttpClient) { }

  //function to get show details from external api link
  getShowDetails(searchText: string): Observable<IarrayTvShowsDisplay>{
    let uriParams='';
    if(typeof searchText === 'string'){
      uriParams = `q=${searchText}`;
    }
    console.log('in get show details function');
    return this.httpClient.get<IarrayTvShowsDisplayData>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?${uriParams}&appId=${environment.appId}`).pipe(
        map(data => this.transformToIarrayTvShowsDisplay(data)));

  }


  //Transform to ITvShowsDisplay function below
  private transformToIarrayTvShowsDisplay(data: IarrayTvShowsDisplayData): IarrayTvShowsDisplay{

    var len = data.length;
    console.log( 'Number of shows with the given text in the name :' + len);



    let  tvShowDisplayArray: IarrayTvShowsDisplay = new Array();

    if(len){
    for (var i = 0  ; i < len ; i++)
       {
         tvShowDisplayArray.push({
           id: data[i].show.id,
           url: `${environment.baseUrl}tvmaze.com/shows/${data[i].show.id}/${data[i].show.name}`,
           name: data[i].show.name,
           language: data[i].show.language,

           scheduleTime: data[i].show.schedule.time ? data[i].show.schedule.time : 'Not listed',
           scheduleDays: data[i].show.schedule != null && data[i].show.schedule.days.length != 0 ? data[i].show.schedule.days : ["Not Found"],
           rating: data[i].show.rating != null && data[i].show.rating.average != null? data[i].show.rating.average : "Not Rated",
           image: data[i].show.image != null ? data[i].show.image.medium : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png",
          // networkname: data[i].show.network != null ? data[i].show.network.name : "Not Found",
           summary: data[i].show.summary != null ? data[i].show.summary.replace(/<[^>]*>?/gm, '') : "No Summary",
           //summary: data[i].show.summary.replace(/<\/p>/gm, "").replace(/<p>/gm,"").replace(/<b>/gm,"").replace(/<\/b>/gm,""),
         } as ITvShowsDisplay);
         //console.log(data[i].show.rating + ':');
         //console.log("summary"+data[i].show.summary);
         }
         return tvShowDisplayArray;
        }}
      }
