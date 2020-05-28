import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IShow } from '../ishow';
import { ShowServiceService } from '../show-service.service';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-displayshows',
  templateUrl: './displayshows.component.html',
  styleUrls: ['./displayshows.component.css']
})
export class DisplayshowsComponent implements OnInit {
  pageEvent: PageEvent;
datasource: null;
indexnumber: number;
pageSize: number;
length: number;
  //@Input() currentdata: IShow;
 @Output() PageEvent = new EventEmitter<string>();
 displayedColumns: string[] = ['id', 'name', 'image', 'duration', 'showUrl', 'language', 'tvrageId', 'theTvDbId', 'officialSite'];
  showDetails: IShow[];
  constructor(private showService: ShowServiceService){
  }
  ngOnInit() : void {
    this.getServerData(null)
  }
  public getServerData(event?: PageEvent)
  {
     if (event === null)
      {
       this.indexnumber = 0;
      }
      else{
        this.indexnumber = event.pageIndex;
      }

     this.showService.getShows(this.indexnumber).subscribe(response => {
            if (response) {
              this.showDetails = response;
            }
      });
     return event;
  }
  }
