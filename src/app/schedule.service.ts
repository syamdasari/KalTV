import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ISchedule } from './ischedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  country = `US`;
  date = `2014-12-01`;

  constructor(private httpClient: HttpClient) { }

  getSchedules(country: string, date: string){
    return this.httpClient.get(`http://api.tvmaze.com/schedule?country=${country}&date=${date}`)
    .pipe(
      map(function(fullSchedules: any[]){
        return fullSchedules.map(function(fullSchedule): ISchedule {
          return {
            showName: fullSchedule.name,
            airtime: fullSchedule.airtime,
            networkName: fullSchedule.show.network.name,
            summary: fullSchedule.summary,
            image: fullSchedule.show.image
          };
        })
      })
    );
  }
}
