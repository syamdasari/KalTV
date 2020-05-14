export interface ITvShowsDisplay {
  id: number;
  url: string;
  name: string;
  language: string;
  scheduleTime: number;
  scheduleDays: string[];
  rating: number;
  image: string;
  summary: string;
  networkname: string;
}
export interface IarrayTvShowsDisplay extends Array<ITvShowsDisplay>{}
