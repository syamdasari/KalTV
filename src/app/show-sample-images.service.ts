import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { IShowImages } from './ishow-images';
import { map } from 'rxjs/operators';

interface IShowSampleImagesData {
  shows:
  [
    {
      id: number,
      type: string,
      resolution: {
          original: {
                url: string;
            }
     }
    }
  ];
}

@Injectable({
  providedIn: 'root'
})

export class ShowSampleImagesService {

  constructor(private httpClient: HttpClient) {

  }
  getShowImage(){
   return this.httpClient.get<IShowSampleImagesData>(
      `${environment.baseUrl}api.tvmaze.com/shows/1/images&appid=${environment.appId}`
   ).pipe(map(data => this.tranformToIShowImage(data)));
  }
  tranformToIShowImage(data: IShowSampleImagesData): IShowImages
  {
      return {
        showId: data.shows[0].id,
        showImage:data.shows[0].resolution.original.url,
        showDesc: 'Test'
      };
  }
}
