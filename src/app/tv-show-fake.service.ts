import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IarrayTvShowsDisplay , ITvShowsDisplay} from './itv-shows-display';
import { ITvShowService } from './itv-show-service';
import { newArray } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class TvShowFakeService implements ITvShowService{

  constructor() { }
  public getShowDetails(searchText:string): Observable<IarrayTvShowsDisplay>
  {
    var len=5;
    var tvShowDisplayArrayfake : IarrayTvShowsDisplay = new Array();
    for(var i=0;i<len;i++)
    {
      tvShowDisplayArrayfake.push(
        {
        id: 123,
        url:'',
        name: 'girls',
        language: 'english',
        scheduleTime: 22.0,
        scheduleDays: [],
        rating:6.9,
        image:'',
        summary:'dummy summary',
        //networkname: 'hbo'
    }as ITvShowsDisplay)
  }
  return of(tvShowDisplayArrayfake);
}
}
