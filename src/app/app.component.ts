import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'Angular Pipes Assignment';
  currentDate: Date;

  constructor(private datePipe: DatePipe) {
    // Initialize currentDate with the current date
    this.currentDate = new Date();
  }
}
