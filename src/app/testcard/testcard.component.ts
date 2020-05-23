import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-testcard',
  templateUrl: './testcard.component.html',
  styleUrls: ['./testcard.component.css']
})
export class TestcardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', content: 'Actors', cols: 1, rows: 1 },
          { title: 'Card 2', content: 'Shows', cols: 1, rows: 1 },
          { title: 'Card 3', content: 'Schedules', cols: 1, rows: 1 },
          { title: 'Card 4', content: 'Times' ,cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
