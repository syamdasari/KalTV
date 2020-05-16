import { Component, OnInit } from '@angular/core';
import { ISchedule } from '../ischedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: ISchedule;
  schedules: ISchedule[];
  schedules$ = this.scheduleService.getSchedules("US", "2014-12-01")
  constructor(private scheduleService: ScheduleService) {
    this.schedule = {
    showName: 'jhggfiuhgi',
    airtime: 'sjgfffffhhh',
    networkName: 'jhgffdfd',
    image: '',
    summary: 'kkjhhjghgffdfg jhghfgfd'
    }
    this.schedules = [this.schedule];
   }

  ngOnInit(): void {
  }

}
