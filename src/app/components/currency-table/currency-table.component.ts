import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { count, delay, repeat, switchMap, tap } from 'rxjs/operators';
import { ExchangeResponse, Rates } from '../../models/exchange-response';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css'],
})
export class CurrencyTableComponent implements OnInit {
  page: number = 1;
  maxPerPage: number = 5;

  exchangeResponse$: Observable<ExchangeResponse>;
  rates: { name: string; value: number }[] = [];

  @Input() public type: 'USD' | 'EUR' = 'EUR';
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit() {
    this.exchangeResponse$ = this.exchangeService.getCurrencyData(this.type);
    this.getRates();
  }

  get showRates(): Rates[] {
    const base = this.page - 1;
    return this.rates.slice(
      base * this.maxPerPage,
      base * this.maxPerPage + this.maxPerPage
    );
  }

  private getRates() {
    this.exchangeResponse$.subscribe((data) => {
      const rates = data.rates;
      this.rates = Object.keys(rates).map((key) => ({
        name: key,
        value: rates[key],
      }));
    });
  }

  nextPage() {
    this.page = this.page + 1;
  }

  previusPage() {
    this.page = this.page > 1 ? this.page - 1 : 1;
  }
  reload() {}
}
