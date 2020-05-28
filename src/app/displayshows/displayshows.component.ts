import { Component, OnInit } from '@angular/core';
import { IShow } from '../ishow';
import { ShowServiceService } from '../show-service.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-displayshows',
  templateUrl: './displayshows.component.html',
  styleUrls: ['./displayshows.component.css']
})
export class DisplayshowsComponent implements OnInit {
  showDetails: IShow[];
  displayedColumns: string[] = ['id', 'name', 'image', 'duration','showUrl', 'language', 'tvrageId', 'theTvDbId', 'officialSite'];

  constructor(private showService: ShowServiceService){
  }
  ngOnInit() : void {
    this.showService.getShows().subscribe(data => this.showDetails = data);
  }
}
