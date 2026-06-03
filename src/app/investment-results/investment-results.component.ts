import { Component, inject, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];   // (?)if we get a "results", it will be an array of objects with the shape defined by the curly brackets 

  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData());
}