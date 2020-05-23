import { Observable } from 'rxjs';
import { ISchedule } from './ischedule';


export interface IScheduleService {
  getScheduleDetails(country: string, date: string):
  Observable<ISchedule[]>
}
