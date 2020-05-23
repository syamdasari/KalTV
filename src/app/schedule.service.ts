import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISchedule } from './ischedule';
import {map} from 'rxjs/operators';
import { IScheduleService } from './ischedule-service';

interface IScheduleData {
  name: string,
  airtime: string,
  summary: string,
  image: {
    medium: string
  },
 show: {
  network: {
    name: string
  },
}
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements IScheduleService {

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
      networkName: data?.show?.network?.name,
      summary: data.summary,
      image: data?.image?.medium
    }
  }
}
