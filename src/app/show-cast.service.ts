// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { IShowCast, IarrayShowCast } from './ishow-cast';
// import { map } from 'rxjs/operators';
// import { IShowCastService } from './ishow-cast-service';
// import { Observable } from 'rxjs';


// interface IShowCastData
// {
//   person :
//   {
//     id : number,
//     url : string,
//     name : string
//   },
//   country :
//   {
//     code : string
//   },
//   gender : string,
//   image :
//   {
//     medium : string
//   },
//   character :
//   {
//     name : string
//   },
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ShowCastService implements IShowCastService {

//   constructor(private httpClient: HttpClient)
//   {

//   }

//   getShowCast(search: string)
//   {
//     let uriParams='';
//     if(typeof search === 'string')
//     {
//       uriParams = `q=${search}`;
//     }

//     return this.httpClient.get<IShowCastData>
//     (
//       `${environment.baseUrl}api.tvmaze.com/shows/1/cast&appid=${environment.appId}`
//     ).pipe(map(data => this.transformToIShowCast(data)))
//   }
//   private transformToIShowCast(data: IShowCastData) : IShowCast
//   {
//     return
//     {
//       id: data.person;
//       url : data.person;
//       name : data.person;
//       country : data.country;
//       charactername : data.character;
//       gender : data.gender;
//       image : data?.image?.medium
//     }

//   }
// }
