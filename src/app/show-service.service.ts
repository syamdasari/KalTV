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
      console.log(' Generic list is called');
  }

  getShowsByName(name: string) {
    if (name != null && name != '') {
    return this.httpClient.get<ISearchData[]>(
      `http://api.tvmaze.com/search/shows?q=${name}`
    ).pipe(
      map(data => data.map((item) => this.transformSearchToIShow(item))
    ));
    } else {
      return this.httpClient.get<IShowData[]>(
        `http://api.tvmaze.com/search/shows?q=girls`
      ).pipe(
        map(data => data.map((item) => this.transformToIShow(item))
      ));
    }

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
      duration: data.runtime,
      officialSite: data.officialSite,
    }
  }
  transformSearchToIShow(data: ISearchData): IShow{
    return {
        id: data.show.id,
        name: data.show.name,
        showUrl: data.show.url,
        tvrageId: data.show.externals.tvrage,
        language: data.show.language,
        theTvDbId: data.show.externals.thetvdb,
        image: data.show.image != null ? data.show.image.medium : "https://dubsism.files.wordpress.com/2017/12/image-not-found.png",
        duration: data.show.runtime,
        officialSite: data.show.officalSite,
    }
  }
}
