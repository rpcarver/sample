/* tslint:disable:no-console */
import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../models/purchases.model.js';
import {SampleApiService} from '../sample-api.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  public purchases: Purchase[];

  constructor(private sampleApiService: SampleApiService) {
  }

  ngOnInit() {
    this.loadAllPurchases();
  }

  loadAllPurchases() {
    this.sampleApiService.getAllPurchases().subscribe(
      data => { this.purchases = data; },
      err => console.error(err),
      () => console.log('loaded purchases')
    );
  }

  /*
   * Yes, it returns one purchase, but as an array, hence the name
   */
  loadPurchasesById(id) {
    this.sampleApiService.getPurchasesById(id).subscribe(
      data => { this.purchases = data; },
      err => { console.error(err); this.purchases = null; },
      () => console.log('loaded purchases by id')
    );
  }

  loadPurchasesBySymbol(symbol) {
    this.sampleApiService.getPurchasesBySymbol(symbol).subscribe(
      data => { this.purchases = data; console.log(data); },
      err => { console.error(err); this.purchases = null; },
      () => { console.log('loaded purchases by symbol'); console.log(this.purchases); }
    );
  }
}
