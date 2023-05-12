import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message = '';

  constructor(private dataService: DataService) {
    this.dataService.getMessage().subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
