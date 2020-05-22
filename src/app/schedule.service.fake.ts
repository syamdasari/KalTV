import { IScheduleService } from './ischedule-service';
import { Observable, of } from 'rxjs';
import { ISchedule } from './ischedule';

export class ScheduleServiceFake implements IScheduleService{
  private fakeSchedule: ISchedule = {
  showName: "gfgfg",
  airtime: "2020-05-05",
  networkName: "dfg0ring",
  image: "",
  summary: "gsgsfgfgg"
  }

public getScheduleDetails(country: string, date: string) :
Observable<ISchedule[]>{
  return of([this.fakeSchedule]);
}
}
