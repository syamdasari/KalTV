import { DataSource } from '@angular/cdk/collections';
export interface DisplayAuthor {
  name: string;
  id: number;
  age: number;
  gender: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DisplayAuthor[] = [
  {id: 1, name: 'Meghamala Karnati', image: 'https://www.linkedin.com/in/meghamala-karnati-62002baa/', linkedInURL: 'https://www.linkedin.com/in/meghamala-karnati-62002baa/', summary:'Megha mala' },
  {id: 2, name: 'Iryna', image: '', linkedInURL: 'https://www.linkedin.com/in/meghamala-karnati-62002baa/', summary:'' },
  {id: 3, name: 'Gnana Deepika', image: 'https://www.linkedin.com/in/gnana-deepika-bandaru-5878b79a/', linkedInURL: 'https://www.linkedin.com/in/gnana-deepika-bandaru-5878b79a/', summary:'Deepika' },
  {id: 4, name: 'Syam Kiran Dasari', image: 'https://www.linkedin.com/in/syam-kiran-dasari-53368a2/', linkedInURL: 'https://www.linkedin.com/in/syam-kiran-dasari-53368a2/', summary:' Syam Kiran Dasari' },
];
