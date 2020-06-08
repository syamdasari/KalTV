import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors = [

    {
     name: 'MeghaMala Karnati',
     image: 'assets/Megha.jpg',
     summary:'Fullstack developer with eagerness to learn and contribute to the projects.',
     linkedInProfile : 'https://www.linkedin.com/in/meghamala-karnati-32a6451ab/'
     },
    {
      name: 'Iryna',
      image: 'assets/Iryna.jpg',
      summary:'Fullstack developer with eagerness to learn and contribute to the projects.',
      linkedInProfile : ''
    },
    {
    name: 'Gnana Deepika',
    image: 'assets/Gnana.jpg',
    summary:'Fullstack developer with eagerness to learn and contribute to the projects.',
    linkedInProfile : 'https://www.linkedin.com/in/gnana-deepika-bandaru-5878b79a'  },
    {
      name: 'Syam Kiran Dasari',
      image: 'assets/SyamDasari.jpg',
      summary:'Fullstack developer with eagerness to learn and contribute to the projects.',
      linkedInProfile : 'https://www.linkedin.com/in/syam-kiran-dasari-53368a2/'
    }
    ]
  constructor() { }
  ngOnInit(): void {
  }
}
