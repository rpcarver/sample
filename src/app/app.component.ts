import { Component } from '@angular/core';
import {SampleApiService} from './sample-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

  constructor(private sampleApiService: SampleApiService) {
    this.sampleApiService.getAllPurchases();
  }
}
