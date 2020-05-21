export interface IShowCast
{
  id: number,
  url: string,
  name: string,
  country: string,
  charactername: string,
  gender: string,
  image: string
}

export interface IarrayShowCast extends Array<IShowCast>
{

}
