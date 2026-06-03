import { Component, Input } from '@angular/core';
import { CurrencyPipe } from "@angular/common";


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];   // (?)if we get a "results", it will be an array of objects with the shape defined by the curly brackets 
}
