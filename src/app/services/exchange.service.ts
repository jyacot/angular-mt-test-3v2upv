import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeResponse } from '../models/exchange-response';

@Injectable()
export class ExchangeService {
  urlBase: string =
    'https://api.apilayer.com/exchangerates_data/latest?apikey=223xhwYdROXWDOhSB8HicjdMr9gTIugU&base=';
  constructor(private http: HttpClient) {}

  getCurrencyData(type: 'USD' | 'EUR') {
    return this.http.get<ExchangeResponse>(this.urlBase + type);
  }
}
