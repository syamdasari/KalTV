import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IShow } from './ishow';
import { map } from 'rxjs/operators';
import { IShowService} from './ishow-service'
import { NumberValueAccessor } from '@angular/forms';
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

interface ISearchData {
  show:
  {
    id: number,
    url: string,
    name: string,
    language: string,
    runtime: number,
    externals: {
      tvrage: number,
      thetvdb: number
    },
    image: {
      medium: string,
    }
    officalSite: string
  }
}
@Injectable({
  providedIn: 'root'
})
export class ShowServiceService implements IShowService{
  constructor(private httpClient: HttpClient){}
  getShows(pageindex: number) {
      return this.httpClient.get<IShowData[]>(
        `http://api.tvmaze.com/shows?page=${pageindex}`
      ).pipe(
        map(data => data.map((item) => this.transformToIShow(item))
      ));
  }
  getShowsByName(name: string) {
    return this.httpClient.get<IShowData[]>(
      `http://api.tvmaze.com/shows?q=${name}`
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
      image: data.image !=null ? data.image.medium : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png",
      //image: data.image.medium != null ? data.image.medium : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png",
      duration: data.runtime,
      officialSite: data.officialSite,
    }
  }
}
