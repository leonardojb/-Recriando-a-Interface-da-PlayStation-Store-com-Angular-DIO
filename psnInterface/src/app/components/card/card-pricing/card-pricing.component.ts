import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameType:string="DigitalOne"
  @Input()
  gamePrice:string="R$ 139,90"

  constructor() { }

  ngOnInit(): void {
  }

}
