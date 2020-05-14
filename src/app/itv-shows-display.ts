export interface ITvShowsDisplay {
  id:number,
  url:string,
  name:string,
  language: string,
  scheduleTime: number,
  scheduleDays: string[],
  rating: number,
  image: string,
  networkname: string,
  summary:string
}
export interface IarrayTvShowsDisplay extends Array<ITvShowsDisplay>{}
