export interface ExchangeResponse {
  success: boolean;
  timestamp: number;
  base: 'USD' | 'EUR';
  date: 'string';
  rates: {
    [currencyName: string]: number;
  };
}

export interface Rates {
  name: string;
  value: number;
}
