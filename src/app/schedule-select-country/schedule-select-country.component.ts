import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-select-country',
  templateUrl: './schedule-select-country.component.html',
  styleUrls: ['./schedule-select-country.component.css']
})
export class ScheduleSelectCountryComponent implements OnInit {

    countries =   [
    {value: "AU", viewValue: "Australia"},
    {value: "JP", viewValue: "Japan"},
    {value: "NZ", viewValue: "New Zealand"},
    {value: "RU", viewValue: "Russian Federation"},
    {value: "GB", viewValue: "United Kingdom"},
    {value: "US", viewValue: "United States"}
  ]
  defaultCountry = this.countries[5].value;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event)
  }

}
