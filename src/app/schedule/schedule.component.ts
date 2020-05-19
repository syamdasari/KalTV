import { Component, OnInit } from '@angular/core';
import { ISchedule } from '../ischedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  localData: ISchedule[]
     constructor(private scheduleService: ScheduleService) {    }


  ngOnInit(): void {
    this.scheduleService.getScheduleDetails('US', '2014-12-01')
    .subscribe((data) =>
      this.localData = data
      )

  }

}
