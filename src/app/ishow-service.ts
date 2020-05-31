import { Observable } from 'rxjs';
import {IShow} from './Ishow'

export interface IShowService {
  getShows(pageindex: number): Observable<IShow[]>;
  getShowsByName(name: string): Observable<IShow[]>;
}
