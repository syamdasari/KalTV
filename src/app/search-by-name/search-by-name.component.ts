import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TvShowService } from '../tv-show.service';
import { debounceTime } from'rxjs/operators';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
search = new FormControl('',[Validators.minLength(3)]);
  constructor(private tvshowService: TvShowService) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if(!this.search.invalid && searchValue){
        this.searchEvent.emit(searchValue);
        // const userInput = searchValue.trim();
        // this.tvshowService.getShowDetails(userInput).subscribe(data => console.log(data));

      }
    })
  }

}
