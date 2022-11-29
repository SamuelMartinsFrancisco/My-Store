import { Component, Input, Output, EventEmitter } from '@angular/core';  
import { Product } from '../products'; 

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!: Product | undefined;  // https://angular.io/api/core/Input
  @Output() notify = new EventEmitter();   // https://angular.io/api/core/Output
}                                          // https://angular.io/api/core/EventEmitter
