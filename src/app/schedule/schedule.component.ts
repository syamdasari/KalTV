import { Component, OnInit } from '@angular/core';
import { ISchedule } from '../ischedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedule: ISchedule;
  schedules: ISchedule[];
  constructor() {
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
