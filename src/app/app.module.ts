import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseAddComponent } from './purchase-add/purchase-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseListComponent,
    PurchaseAddComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
