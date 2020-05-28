import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { IShowImage } from './ishow-images';
import { map } from 'rxjs/operators';
interface IShowSampleImagesData {
  id: number;
  name: string;
  url: string;
  image: {
    medium: string
  };
  summary: string;
}
@Injectable({
  providedIn: 'root'
})

export class ShowSampleImagesService {
  constructor(private httpClient: HttpClient) {
  }

  getShowImage(){
   return this.httpClient.get<IShowSampleImagesData[]>(
      `${environment.baseUrl}api.tvmaze.com/shows?appId=${environment.appId}`
   ).pipe(
       map(
         data => data.map((item) => this.tranformToIShowImage(item))
        )
      );
  }
  tranformToIShowImage(data: IShowSampleImagesData): IShowImage
  {
      return {
        showId: data.id,
        showName: data.name,
        showImage: data.image.medium,
        showDesc: data.summary,
        showUrl: data.url,
      };
  }
}
