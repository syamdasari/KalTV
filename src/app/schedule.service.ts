import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISchedule } from './ischedule';
import {map} from 'rxjs/operators';

interface IScheduleData {
  name: string,
  airtime: string,
  network: {
    name: string
  },
  summary: string,
  image: {
    medium: string
  },
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) { }

  getScheduleDetails(country: string, date: string){
  return this.httpClient.get<IScheduleData[]>(
      `${environment.baseUrl}api.tvmaze.com/schedule?country=${country}&date=${date}`).pipe(
        map((data) => data.map((item)=>this.transformToISchedule(item))
        )
      )

  }

  transformToISchedule(data: IScheduleData) : ISchedule{
    return {
      showName: data.name,
      airtime: data.airtime,
      networkName: data?.network?.name,
      summary: data.summary,
      image: data?.image?.medium
    }
  }
}
