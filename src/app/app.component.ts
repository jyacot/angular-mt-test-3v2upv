import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  typeCurrency: { name: string }[] = [
    {
      name: 'EUR',
    },
    {
      name: 'USD',
    },
  ];
  name = 'Angular';
}
