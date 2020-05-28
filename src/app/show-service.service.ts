import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IShow } from './ishow';
import { map } from 'rxjs/operators';

interface IShowData {

 id: number,
 url: string,
 language: string,
 name: string,
 runtime: number,
 externals: {
   tvrage: number,
   thetvdb: number
 },
 image: {
  medium: string,
 },
 officialSite: string,
}
@Injectable({
  providedIn: 'root'
})
export class ShowServiceService {

  constructor(private httpClient: HttpClient){}

  getShows() {
        return this.httpClient.get<IShowData[]>(
      `http://api.tvmaze.com/shows`
    ).pipe(
      map(data => data.map((item) => this.transformToIShow(item))
    ));
  }

  transformToIShow(data: IShowData): IShow {
    return {
      id: data.id,
      name: data.name,
      showUrl: data.url,
      language: data.language,
      tvrageId: data.externals.tvrage,
      theTvDbId: data.externals.thetvdb,
      image: data.image.medium,
      duration: data.runtime,
      officialSite: data.officialSite,
    }
  }
}
