import { Component } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  monthlyPrices :number[] = [99,999,9999];
  yearlyPrices : number[] = [999,9999,99999];
  ShowMonthlyPrice : boolean = true; 
  
  tooglePrice(){
    this.ShowMonthlyPrice = !this.ShowMonthlyPrice;
  }
}