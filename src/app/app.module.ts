import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { ExchangeService } from './services/exchange.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, CurrencyTableComponent],
  providers: [ExchangeService],
  bootstrap: [AppComponent, CurrencyTableComponent],
})
export class AppModule {}
