import { Observable } from 'rxjs';
import { IarrayTvShowsDisplay } from './itv-shows-display';

export interface ITvShowService {
  getShowDetails(searchText:string): Observable<IarrayTvShowsDisplay>
}
