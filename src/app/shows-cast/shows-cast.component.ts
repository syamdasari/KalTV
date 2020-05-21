import { Component, OnInit } from '@angular/core';
import { IShowCast } from '../ishow-cast';
import { ShowCastService } from '../show-cast.service';

@Component({
  selector: 'app-shows-cast',
  templateUrl: './shows-cast.component.html',
  styleUrls: ['./shows-cast.component.css']
})
export class ShowsCastComponent implements OnInit
{
  current: IShowCast

  constructor(private showCast: ShowCastService)
  {

  }

  ngOnInit(): void
  {
    // this.showCastService.getShowCast().subscribe(data => this.current(data))
  }

}
