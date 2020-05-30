import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule-select-country',
  templateUrl: './schedule-select-country.component.html',
  styleUrls: ['./schedule-select-country.component.css']
})
export class ScheduleSelectCountryComponent implements OnInit {

  @Output() countrySelect = new EventEmitter<string>();

    countries =   [
    {value: "AU", viewValue: "Australia"},
    {value: "GB", viewValue: "United Kingdom"},
    {value: "US", viewValue: "United States"}
  ]
  defaultCountry = this.countries[2].value;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event) {

    console.log(event.value)

    this.countrySelect.next(event.value)
  }

}
