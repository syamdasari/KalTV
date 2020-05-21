import { Observable } from 'rxjs';
import { IarrayShowCast } from './ishow-cast';


export interface IShowCastService
{
  getShowCast(search: string)
}
