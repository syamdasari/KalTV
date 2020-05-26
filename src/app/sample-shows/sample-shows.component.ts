import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { IShowImage } from '../ishow-images';
import { ShowSampleImagesService } from '../show-sample-images.service';

@Component({
  selector: 'app-sample-shows',
  templateUrl: './sample-shows.component.html',
  styleUrls: ['./sample-shows.component.css']
})
export class SampleShowsComponent implements OnInit {
  sampleShowImages: IShowImage[]

  // constructor() {
  //   this.sampleShowImages = [{
  //   showId: 1,
  //   showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/43.jpg',
  //   showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202638.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202630.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202634.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202631.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/43.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/43.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/43.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/43.jpg',
  //     showDesc: 'Original Untouched'
  //   },
  //   {
  //     showId: 1,
  //     showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/43.jpg',
  //     showDesc: 'Original Untouched'
  //   }
  // ];
  // }
    constructor( private showSampleImagesService: ShowSampleImagesService ){
  }
  ngOnInit(): void {
    this.showSampleImagesService.getShowImage().subscribe(data => this.sampleShowImages = data);
  }
}
