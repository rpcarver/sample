/* tslint:disable:no-console */
import {Component, Input, OnInit} from '@angular/core';
import {SampleApiService} from '../sample-api.service';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.css']
})
export class PurchaseAddComponent implements OnInit {
  @Input() purchaseData = { symbol: '', amount: '' };
  // productData = { prod_name:'', prod_desc: '', prod_price: 0 };

  constructor(private sampleApiService: SampleApiService) { }

  ngOnInit() {
  }

  addPurchase() {
    this.sampleApiService.addPurchase(this.purchaseData).subscribe(
      data => { this.purchaseData = data; },
      err => { this.purchaseData = { symbol: '', amount: '' }; console.error(err);  },
      () => { console.log('created purchase'); this.purchaseData = { symbol: '', amount: '' }; }
    );
  }
}
