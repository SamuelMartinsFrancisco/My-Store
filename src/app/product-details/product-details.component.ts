import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // https://angular.io/api/router/ActivatedRoute
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // https://angular.io/api/router/ActivatedRouteSnapshot
    const routeParams = this.route.snapshot.paramMap; 
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}


